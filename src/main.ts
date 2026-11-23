import './styles/main.scss';

// ── Display settings (theme and text size) ─────────────────────────────────

type Theme = 'system' | 'light' | 'dark' | 'contrast';
interface DisplayPrefs {
  theme?: Theme;
  text?: string;
}

const STORAGE_KEY = 'sk:display';
const root = document.documentElement;

function readPrefs(): DisplayPrefs {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as DisplayPrefs;
  } catch {
    return {};
  }
}

function savePrefs(prefs: DisplayPrefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Storage can be blocked (private mode); the choice then lasts until the page is closed.
  }
}

function applyPrefs({ theme = 'system', text = '1' }: DisplayPrefs) {
  if (theme === 'system') delete root.dataset.theme;
  else root.dataset.theme = theme;
  root.style.setProperty('--text-scale', text);
}

function setUpDisplayMenu() {
  const menu = document.querySelector<HTMLDetailsElement>('details.display');
  if (!menu) return;
  const prefs = readPrefs();

  for (const input of menu.querySelectorAll<HTMLInputElement>('input[type="radio"]')) {
    const current = input.name === 'theme' ? (prefs.theme ?? 'system') : (prefs.text ?? '1');
    input.checked = input.value === current;
    input.addEventListener('change', () => {
      const next = { ...readPrefs(), [input.name]: input.value };
      savePrefs(next);
      applyPrefs(next);
    });
  }

  // Close with Escape (returning focus to the button) or by clicking elsewhere.
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (menu.open && !menu.contains(event.target as Node)) menu.open = false;
  });
}

// ── App wall filters ───────────────────────────────────────────────────────

function setUpAppFilters() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('.filter')];
  const tiles = [...document.querySelectorAll<HTMLLIElement>('.tile')];
  const status = document.querySelector<HTMLElement>('.wall-status');

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter ?? 'all';
      for (const other of buttons) other.setAttribute('aria-pressed', String(other === button));

      let shown = 0;
      for (const tile of tiles) {
        const visible = filter === 'all' || tile.dataset.category === filter;
        tile.hidden = !visible;
        if (visible) shown++;
      }

      // The status line is a polite live region, so screen readers hear the new count.
      if (status) {
        const label = button.firstChild?.textContent?.trim().toLowerCase() ?? '';
        status.textContent =
          filter === 'all' ? `Showing all ${shown} apps and games.` : `Showing ${shown} in ${label}.`;
      }
    });
  }
}

setUpDisplayMenu();
setUpAppFilters();
