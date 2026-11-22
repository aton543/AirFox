# AirFox

My Firefox config. I made it because I wanted Firefox to stop sending data to Mozilla and stop eating RAM while I game. It turns off telemetry, kills the sponsored stuff and Pocket, and makes the browser a bit lighter.

Works on Linux, should work on Windows and macOS too (I only tested on Linux).

## What's in here

- `user.js` - the main part. Settings for privacy and performance.
- `userChrome.css` - optional. Just makes the Firefox UI cleaner and more compact.

### user.js

Firefox reads this file from your profile folder every time it starts and applies the settings from it. They're the same settings you can find in `about:config`, but this way you don't have to click through them one by one, and Firefox can't quietly reset them after an update. Everything is commented, so if you don't like something, just delete that line.

### userChrome.css

A regular CSS file, but for the Firefox interface (tabs, toolbar, buttons) instead of websites. Mine hides some buttons I never use, makes tabs smaller and cleans up the new tab page.

It's nothing special. It only changes how Firefox looks, not how it works. If you only care about privacy and speed, skip it and use just `user.js`.

## How to install

**1. Download it**

```bash
git clone https://github.com/aton543/FastFox.git
```

Or click Code -> Download ZIP on this page and unpack it.

**2. Find your profile folder**

Type `about:support` in the address bar, find "Profile Folder" and click the button next to it to open it.

If you don't want to mess with your main profile, make a new one first at `about:profiles`.

**3. Copy files and restart**

- Put `user.js` in the profile folder.
- Optional: make a folder called `chrome` in the profile folder and put `userChrome.css` inside. The folder has to be named exactly `chrome`, Firefox won't see the file otherwise.
- Fully close Firefox and open it again.

It should look like this:

```
your-profile/
├── user.js
└── chrome/
    └── userChrome.css
```

To check that it works, open `about:config` and search for `toolkit.telemetry.enabled`. It should say `false`.

## Undo

Delete `user.js` and the `chrome` folder, then restart. Note that the settings stay as they were until you reset them in `about:config` (right click -> Reset).

## Good to know

- One line in `user.js` is for Linux hardware video decoding (VA-API), other systems just ignore it.
- If you don't have much RAM, set `dom.ipc.processCount` to 2 in `user.js`.
- If the CSS breaks something after a Firefox update, comment out that part with `/* */` and tell me in Issues.

## License

MIT
