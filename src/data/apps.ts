/**
 * Every app and game Sana has published on Google Play as "greybits".
 * The build turns this list into the app wall (see vite.config.ts), so adding an app here is
 * the only step needed to show it on the site.
 */

export type Category = 'games' | 'kids' | 'health' | 'tools';

export const categories: Record<Category, string> = {
  games: 'Games',
  kids: 'Kids and accessibility',
  health: 'Health and fitness',
  tools: 'Tools and AI',
};

export interface App {
  /** Google Play package name */
  id: string;
  name: string;
  /** What it is, in a few words */
  tagline: string;
  category: Category;
  /** Play Store icon, without the size suffix */
  icon: string;
}

const icon = (key: string) => `https://play-lh.googleusercontent.com/${key}`;

export const apps: App[] = [
  // Games
  { id: 'com.proapps.oasling', name: 'Oasling', tagline: 'Desert colony builder', category: 'games', icon: icon('AYxq8Id91RN_fj3PWfAwQM9MTSeboicMf6CPKR9o40GlicqH903mLcMFt1J2jg2h3nuiaSp042G4xZrbom-WdQ') },
  { id: 'com.proapps.moundling', name: 'Moundling', tagline: 'Bee tower defense', category: 'games', icon: icon('TQ_veFJVx0zU7t7BldGjgkp3GDMW-23iRYGjhEqTl3bWBRFaZQPzKWkRn-bxcZWfe5te40glQruBOckX1PMc') },
  { id: 'com.proapps.bulwark', name: 'Bulwark', tagline: 'Castle tower defense', category: 'games', icon: icon('CufvYhzrBLPK7AyjoJ6t6LaOmJQQohGgE3uAa-ikRfpbl8D9tBOqPkG08sBYwjCEM-IujNqITo3aa-XS2vvHOg') },
  { id: 'com.proapps.siren', name: 'Siren', tagline: 'Traffic jam puzzle', category: 'games', icon: icon('cfVFJaZK6YFoHUYPqUi2z7ntd3z_VAyi6-bEyNylXvWjZD8LBOjF4e9CLxdwxhQ2LTZmI3u1ybjR43L9vlSnO6Q') },
  { id: 'com.proapps.huely', name: 'Huely', tagline: 'Colour match runner', category: 'games', icon: icon('8eTl_3wlaLygeSI1w-YLA9yImVwBruKtBzYyb1giPPKGvdxJbma8fsbf34QO39VL3oGyHbk1mJuUr_I9QWRSWA') },
  { id: 'com.proapps.gondly', name: 'Gondly', tagline: 'Cable car colour sort', category: 'games', icon: icon('7ZYtTEdeN5FkAlR5WuQwn00zATpJ-ETCR_bDkwOUTTmkFTaG21ZlbEFSwuXigs4ilZNQIpkzELf13evlhd5NZHc') },
  { id: 'com.proapps.sortix', name: 'Sortix', tagline: 'Number slide puzzle', category: 'games', icon: icon('DCCfKh6Hwx_p942WtO0s_-NOazSM41A30ToDovVp13hXLfF0eZnVOKP1dCCsWR9eRj9hE5s0CfYcW2P6heevQA') },
  { id: 'com.proapps.runnel', name: 'Runnel', tagline: 'Pipe flow puzzle', category: 'games', icon: icon('Urhw9DF-lnhB3Hys5voYZuQt3ZfxGQcrus7kKVChgG6XkSrW5sINUPtzkMlsiUQjPchj_UWqgwYLIPgabOb6') },
  { id: 'com.proapps.splitloop', name: 'Splitloop', tagline: 'Blob merge puzzle', category: 'games', icon: icon('gBYcd_WvwtUHoSqeOyzeiOxRr7PcH7Y961SN2gteIBGh2KDFN6xaj_j9vEnaUR02H1OiifQWuV_xO1kgTvny') },
  { id: 'com.proapps.blockfit', name: 'Block Fit', tagline: 'Block puzzle', category: 'games', icon: icon('0M-gH-2m3dvXIsAWtFkL6ImfrBOE8lLl9SuvrT4rsBEplS4ZgE4m8CSeg1ffGUu6IXHf4JRdsTPtLVYyqynw-g') },
  { id: 'com.colorstack.app', name: 'Color Stack', tagline: 'Block tower stacker', category: 'games', icon: icon('9Ih-SXivXOsZIJcAsIF_2521LlXvLmmK4A3xkLcT2AssoiFnH64OBPP-m33jQqAgkdTQR7IJcrw8iWtBlk4N') },
  { id: 'com.proapps.chompa', name: 'Chompa', tagline: 'Neon maze muncher', category: 'games', icon: icon('3FqD2G-eqcgvds2ZXINnRrwlER-3jmBLh2TAxdV5xdRa2z2nmUA8fOqcfR7LofA82q7jcKnXE4igFM-dklXmy1s') },
  { id: 'com.proapps.viper', name: 'Coilo', tagline: 'Neon snake game', category: 'games', icon: icon('b05jf3Pzj60UWfScY9_dktLP4PMGjKrAT-pYfr5YJaOhUaFcQaNF-cXcsm22GDs6D55TQQcLdv4_mcnxWIpgpw') },
  { id: 'com.proapps.looply', name: 'Looply', tagline: 'Loop drawing puzzle', category: 'games', icon: icon('cTdcr0XPZJ5lUgG0nZqUNEtCxH9odDy3g9o99wBUe3InvaIcLGpqwGxQC_YkizBRrClV7rqFw9fACGEzVPRJxSY') },
  { id: 'com.proapps.glimmer', name: 'Glimmer', tagline: 'Glitter sort puzzle', category: 'games', icon: icon('VuiplVN8XKIlWnhHwCUXCGK0ki6I4W8orvw4QqiZPOqyDfGlaOVgbv5LyqTeDVMNDdq54AovFbMGa_SZ6hfAJG8') },
  { id: 'com.proapps.inkbloom', name: 'Inkbloom', tagline: 'Mandala puzzle', category: 'games', icon: icon('O6ljnPSC8SYyog_DmjUQqJXNDjrE8m8d19Ryoo_W1NqCJp_xpZLs4OciouEldN0MMxOTVAcZqlfQ-YK9KHkiqQ') },

  // Kids and accessibility
  { id: 'com.bibo.speechtherapy', name: 'Bibo', tagline: 'Speech practice for kids', category: 'kids', icon: icon('06R5DSyYsTmMfwRSbgG06B1ES4shg1X7zWjKgdN5N68QlBt7A5b_ACz5NXVSisdvNU3Qo_omAf87Vqb0pQRt') },
  { id: 'app.cove.autismfriend', name: 'Cove', tagline: 'Autism AAC and sensory calm', category: 'kids', icon: icon('xMINqgA4zkDszulKhwspLdCpsIZuMM3Nuri-j-wy2wFyJmoQOd4_34kCUKTt44KSBmZUcoL85ZVENoC1dzD2io8') },
  { id: 'com.proapps.sprout', name: 'Sprout', tagline: 'Routines for kids with ADHD', category: 'kids', icon: icon('fSv0GxUnmfGKe2tHclCUC7Xxc9kbOuHdeZSxRm1mQlBfWEs7eAN7szFpYNlJkaLk8vVlDxfjpvASE31I02-PYg') },
  { id: 'com.proapps.lingotots', name: 'LingoTots', tagline: 'First words in new languages', category: 'kids', icon: icon('4AB58u8foz4H33KqIokNw4RQXtx8HhsJNvUHGnYUuDfIzhVtC07tb4rHZSH1pUYmVIiiXCLOMGeF1fe93ntucGE') },
  { id: 'com.proapps.snackster', name: 'Snackster', tagline: 'Cooking for kids', category: 'kids', icon: icon('UXx81Hs0kOQJCqIkx4H4JEn8TWveozfNNpz5UHh3yIlG2xg0dIUI0tlOwBBtJieLk1YPL8BtnxdJfDCV4U-qDFY') },
  { id: 'com.proApps.tracingapp', name: 'Trace It!', tagline: 'Letter and number tracing', category: 'kids', icon: icon('QAk0wh3VCPkzAzY4fSzIPR8aKEEpNVKvWnfw2Xd9Ym5jNQEE7TRxPydGxGX_n9uSWJpJmvaB-96bE0j4r02_Fw') },
  { id: 'com.proApps.coloringapp', name: 'ColorJoy', tagline: 'Colouring book', category: 'kids', icon: icon('Bt3HuPIt2TqMeQ968w9PjDJmKjoIgtRSxP09pQ-TfRCtCvzqdEEa7qI3FikkBlraKPZW2CRHYaUZYmjCy1222g') },
  { id: 'com.proapps.tinybites', name: 'TinyBites', tagline: 'Baby food recipes', category: 'kids', icon: icon('nK-yjYpUfqCImofEnJXubR-UXH1RvukUt1B3hFruSooehz48DRwJj0iN5vZUzRo3rWR73PT1waxK0uLPgZRK') },

  // Health and fitness
  { id: 'com.proapps.momentum', name: 'Momentum', tagline: '10-minute home workouts', category: 'health', icon: icon('xNl4YlZiRH6lUgW_lIbszLqKslJCcjMvqRQwiJI-UJBI5-olymwfIKMH9il_ZuCFZB6Vdc3rjZ7v1cmxVPgc') },
  { id: 'com.proapps.yunlo', name: 'Yunlo', tagline: 'Tai chi walking', category: 'health', icon: icon('GBNaoX72hJ8-VnOGL7nsNn1-DQPWy3lHYQIQ7L8f8L1QK_ktB6OM_P0Bqved99Xrk-S3UtURd0PWaKdeK9pX') },
  { id: 'com.proapps.ninglo', name: 'Ninglo', tagline: 'Tai chi and qigong', category: 'health', icon: icon('4A2SQKwft34wCET5zWTW5hHFyUurqEZa0Wo05ngVNUNNUsGpP-RDxphYLi14INABIup30ZKSkhDGsJUorx3b') },
  { id: 'com.proapps.layabout', name: 'Layabout', tagline: 'Workouts in bed', category: 'health', icon: icon('CRebK-OW5g7D5IOK38rIxP47tcG_Xk5DrWdArC8GrFxykZAe-3UxjJnkmoF-yZuT1uZ3XFF9NT_5myjN3C1pK7g') },
  { id: 'com.proapps.rounds', name: 'Rounds', tagline: 'HIIT workout timer', category: 'health', icon: icon('mSM2AMeZJqwAQ0uiUETllJJWw6XWqZE7k7YW0386aFgdYwCmZmu917b5hXkerqfr2vCa1s1ZPF2PVuSOOuUy') },
  { id: 'com.proapps.hundred', name: 'Hundred', tagline: '100 push-up challenge', category: 'health', icon: icon('F6RfgVKNoW797N3DiUjaXOf0PQlFZu4DbjQJrbdNW7DUG-DRr0wC48Ylg9KXf5blrLshYxUhr-mZcy6D0qyR') },
  { id: 'com.proapps.brim', name: 'Brim', tagline: 'Water and electrolytes', category: 'health', icon: icon('H3XSpFkOlT-HKpO0JgmmpjuRwBNG87hnYIPuIUE7Wr3oqPgB09K7E27cY3FiR-_0LbL-t82NCkOloT9H4wJJCQ') },
  { id: 'com.proapps.platewell', name: 'Platewell', tagline: 'Keto and diet plans', category: 'health', icon: icon('zmyaw0pWmLmdb4pBWpGy3t1UKKDdtarDhIJMM2DMlVo0OtzIzyRlPuu2W5zdCyP6qcS4PbOjDxhzlUafkYARLJY') },
  { id: 'com.proapps.caloriecounter', name: 'Calorie Counter', tagline: 'Food log', category: 'health', icon: icon('X6jEomygs8aVpLEhuH-Ew5oTGGLhCWcRb5iO6BsIWK_rsPdc0hi9RMdyVXQ7asj2V_xguFRmKDqgKSZ9bWzYauc') },
  { id: 'com.proapps.tidefasting', name: 'Tide', tagline: 'Intermittent fasting coach', category: 'health', icon: icon('6LSZ_LqiGh1hlnar3sHvByXfiega700rhyO0J1Rb3zUNkgEm3QTpbtUFx0XhBKYobM9aHhowkBCWkc9AJ9vR8Sc') },
  { id: 'com.proapps.calmjar', name: 'Calm Jar', tagline: 'Relax and unwind', category: 'health', icon: icon('DMLmWk7jHMl1YfTCGPEOIZ1NJ8jVdDRMTHMQQ2z_TRosF5ohMr2tvwOOu-gg3d6SAl6L-n1NJ0zn7I6nPzOk288') },
  { id: 'com.solace.mentalhealth', name: 'Solace', tagline: 'Mental wellness', category: 'health', icon: icon('6SUPcUa7Ug5obqHpQvSxirmKMUqJhOlBiIBRD8sQ7QvPTmFRE1xOrQxaq8vU3Zoqu6HyLVnWBVi_uA8U8XoSrw') },

  // Tools and AI
  { id: 'com.proapps.plenty', name: 'Plenty', tagline: 'AI recipe generator', category: 'tools', icon: icon('LNi8kUXFX7b2bT1BudBttt9zSQ2ipidnerEa-YozeOdtA8N2TwrMzm4RqDbqB4vWiYbqBVXw-VzG2anirT-kTQ') },
  { id: 'com.proapps.resumeai', name: 'Resume Builder AI', tagline: 'AI résumé writer', category: 'tools', icon: icon('B8zHIRXJSMsTgFdCVpkzCr_EAspFspBsw_fTPxtpKeHwjXaCboiYioHE3xdWQkCv2h08JoJNxMc64uN0hgTsVA') },
  { id: 'com.proapps.promptcraft.ai', name: 'PromptCraft', tagline: 'AI prompt generator', category: 'tools', icon: icon('J687HgVUk_WtsYmoZTmBz09DY5CyAQFQSdZkbQUfvZGLRCuhXr0uix0B5A5C-xi7oHO7CiAYCnMjQH9qWM1EsQ') },
  { id: 'com.proapps.grocerybuddy', name: 'Shelvo', tagline: 'Grocery list', category: 'tools', icon: icon('MeTgX5j6c_JtYoHbUXcVW50ae0_jtECURXjZmDPhiEKkGBHs0EgU8cAJAkOoaZXINikOxI_GLjiFAhG8vRBHTQ') },
  { id: 'com.proapps.spinpick', name: 'SpinPick', tagline: 'Spin wheel and dice', category: 'tools', icon: icon('Qabzx1HPjkcLUk7uMjExUPeZex1a28H2vLqNhzQDpyT79COnkJOIG8PPymnviJlib0XBayeT2xxdofm_IfV0') },
  { id: 'com.proApps.talkingcactus', name: 'Talking Cactus', tagline: 'Voice changer', category: 'tools', icon: icon('wh9rN4HbOwo7jxzZv_PRRnK45PNd2RQWD898gTs5pO6VZxbQ1hQ2K-Wuo_2gm9wdXC7Uh4BvYPIaEDdIQxgYyQ') },
  { id: 'com.proapps.eatingchewingsounds', name: 'Eating Sounds', tagline: 'Eating and chewing sounds', category: 'tools', icon: icon('pS0MsG7sHHnhOLVD1BcWPI2UJufNFWXxdvbgo7Q7aD7chVKRmtOcTVgAdqk7_-fSdO5vTSRDuC_xsPPFXhU0bqI') },
];

export interface FeaturedApp {
  id: string;
  /** Why it's worth looking at: the design decision, not a feature list */
  note: string;
  /** Play Store screenshots, without the size suffix */
  shots: string[];
}

/** A few apps shown large, with screenshots. */
export const featured: FeaturedApp[] = [
  {
    id: 'com.bibo.speechtherapy',
    note: 'Speech practice for young children, with no scores, no pressure and no ads shown to the child. Each of those is a standard engagement mechanic I removed on purpose: a child practising speech should not be ranked while doing it.',
    shots: ['TsEprYuHMYfZ9Ar1YSj7tkmexPPNGjw4lk4Tn7eYvOFNyNMkyiLY39QCVWRhS1km30F54UM5B5gJGMSRH5JKHg', '6SIbDvmM2eQUVMXBu0DBI8fpJXJYqM8uk3zlue9Zv94POwi9qRyZbNYmYpq9ZrWfrWGswuzcMiUflQvJrftKMg', '3MfD3ZfP7ldq5iMsdrwbEk-CsBGtPZrZsENcgZxcqOQBKZ3S3eLGZnmgXinwFgVYcI0y2c0rrrlHZCFulf8f'].map(icon),
  },
  {
    id: 'app.cove.autismfriend',
    note: 'Picture-based communication (AAC) and sensory calm tools for autistic children. It is built as two spaces, a calm child mode and a separate parent zone with guides, settings and insights, and it says plainly that it is a support tool, not a diagnosis or therapy.',
    shots: ['q5eQe1kJCbT9YcWu8ltHBxwM-7Xkky6u0dRcXRt8rkCI_02Whl5OW_uOeDVPCGZ5uAZqxqMWstrBaWUlML5vcA', 'j3WtQCak4EHtTKoadAYHJrw-XhQF9WPY46R8NBzb6sDKpZgqHOXf-UeZdhm6FPA5CUBciDAX4kAB56cWc9I4VQ', '5UksA58-kMZMvhZX_cPgmeTYHfoxBFKAsnFq2XZwwaW_Y2eesKJWUrMxLyMC7hCjuerHR7qBGifgbP2kIQPuP4s'].map(icon),
  },
  {
    id: 'com.proapps.oasling',
    note: 'A desert colony builder with a campaign, a sandbox, 60 puzzles and a daily challenge. A lot of game systems sit behind one calm home screen, and the art direction was produced with Google Flow.',
    shots: ['h2REmc6-sEXspHsIkgChabh7guTmddwqFWDlZ1htCQfPFQcZeDwNslu4iS2BxpxfPPVrL8PiWV2fnZ5B4wTU0Q', 'c9JWnue6wcikSivs-Xh3vqAqLTURAiKmjpvDl34V6A7Zf4qaqzB5YbiUY7ZHmq2EgIgKmilqLWlL_uWO0xwaxkw'].map(icon),
  },
  {
    id: 'com.proapps.momentum',
    note: 'Home workouts that start by asking two plain questions: what your goal is, and how much time you have. Each option is explained in a sentence (5, 10 or 15 minutes), so nobody has to guess what “Standard” means.',
    shots: ['pSvLr2JEPw13i75_hFQFk56JoHkOe2P4HTIW6vlLBqWKjxy4p-pABTZjV0Ied7c8joQGgs7s8o_sLfMqwtAOTw', 'gakmJeIHq5zm2aSGWy8t6tzQniDoybL1DzLL_Ll8MBGleTY3eZ5NEBfUJ2O690vznHqHffto-AtIbAQ_-QuQKg', 'UqtzAA0psnrpm29eM08iNxl51GzTBFIfcVLbBnfe7P_uS3beAGLAyHA9SV6xFN7DsB7IxyIkGonvnJwhbYIw'].map(icon),
  },
];

export const playStoreDeveloperUrl = 'https://play.google.com/store/apps/dev?id=8067309061059365942';
export const playStoreAppUrl = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;
