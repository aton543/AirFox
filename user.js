// ============================================================
// FastFox - Firefox user.js
// Telemetry off, no sponsored junk, lighter and faster
// Put this file in your profile folder (about:profiles -> Root Folder)
// and restart Firefox.
// ============================================================

// ===== TELEMETRY & DATA COLLECTION =====
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);

// ===== JUNK: SPONSORS, POCKET, RECOMMENDATIONS =====
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutwelcome.enabled", false);

// ===== PERFORMANCE: LOW RESOURCE USAGE (GOOD FOR GAMING) =====

// Fewer content processes = less RAM
user_pref("dom.ipc.processCount", 4);
user_pref("dom.ipc.processPrelaunch.enabled", false);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

// Cache: keep disk cache on (SSD), limit memory cache
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 524288);
user_pref("browser.cache.memory.capacity", 131072);

// Unload inactive tabs when RAM is low
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.low_commit_space_threshold_mb", 3276);

// Network
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.dnsCacheEntries", 10000);
user_pref("network.dnsCacheExpiration", 3600);

// Don't prefetch pages you haven't opened
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// GPU acceleration (VA-API line is Linux only, ignored on Windows)
user_pref("gfx.webrender.all", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

// Fewer disk writes
user_pref("browser.sessionstore.interval", 60000);

// Disable resource-hungry animations
user_pref("browser.download.animateNotifications", false);
user_pref("general.smoothScroll", false);
user_pref("browser.tabs.animate", false);
user_pref("ui.prefersReducedMotion", 1);

// Block video autoplay
user_pref("media.autoplay.default", 5);
