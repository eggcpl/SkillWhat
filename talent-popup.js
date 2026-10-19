(() => {
'use strict';
// ============================================================
// 01. TALENT ICONS (SVG)
// ============================================================
const talentIcons = {
  // SYNERGY: substitui cada SVG individualmente.
  focusfire: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M12 3v5"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M16 12h5"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path><path d="M12 16v5"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M3 12h5"></path><path d="M12 12h.01"></path></svg>`,
  commsboost: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path></svg>`,
  teamrhythm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>`,
  firingline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 5h12"></path><path d="M4 12h10"></path><path d="M12 19h8"></path></svg>`,
  tradekill: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M8 20v2h8v-2"></path><path d="m12.5 17-.5-1-.5 1h1z"></path><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"></path></svg>`,

  // COMPOSURE: troca cada SVG individualmente quando quiseres.
  calmness: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>`,
  resilient: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>`,
  patience: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 11h1"></path><path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4"></path><circle cx="18" cy="18" r="2"></circle></svg>`,
  bounceback: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`,
  loneranger: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 11c-1.5 0-2.5.5-3 2"></path><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"></path><path d="M6 11c1.5 0 2.5.5 3 2"></path></svg>`,
  slowburn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>`,
  clutch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>`,

  pointblank: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 534.000000 367.000000" preserveAspectRatio="xMidYMid meet" class="p-2 h-full"><g transform="translate(0.000000,367.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M4567 3652 c-14 -16 -17 -44 -17 -184 0 -147 2 -167 18 -181 24 -22
    65 -22 85 1 13 14 16 49 19 185 2 157 1 170 -17 183 -26 20 -69 17 -88 -4z"></path><path d="M4091 3434 c-12 -15 -21 -36 -21 -47 0 -22 227 -257 248 -257 21 0
    72 56 72 79 0 14 -38 59 -105 126 -139 138 -156 147 -194 99z"></path><path d="M4952 3340 c-61 -66 -112 -124 -112 -129 0 -19 52 -71 71 -71 10 0
    38 21 61 47 24 25 76 78 116 118 39 39 72 79 72 87 0 28 -40 68 -68 68 -22 0
    -50 -24 -140 -120z"></path><path d="M3517 3263 c-4 -3 -7 -33 -7 -65 l0 -58 -549 0 -549 0 -4 -101 c-3
    -98 -4 -101 -34 -129 -32 -28 -33 -28 -218 -35 -103 -4 -207 -5 -232 -2 -82 9
    -114 61 -114 187 l0 80 -264 0 -265 0 2 -280 2 -281 1255 0 1255 1 0 65 0 65
    78 0 77 0 0 180 c0 99 1 183 3 188 1 4 -27 8 -63 10 -86 3 -100 19 -100 113
    l0 69 -133 0 c-74 0 -137 -3 -140 -7z"></path><path d="M10 2855 l0 -285 38 0 c22 0 73 3 115 6 l77 7 0 278 0 279 -115 0
    -115 0 0 -285z"></path><path d="M326 3124 c-8 -21 -8 -434 0 -501 l7 -53 47 0 47 0 6 68 c9 86 9 465
    1 486 -4 12 -20 16 -54 16 -34 0 -50 -4 -54 -16z"></path><path d="M519 3113 c-2 -16 -2 -144 -1 -285 l4 -258 47 0 48 0 6 83 c9 105 9
    265 0 390 l-6 97 -47 0 c-44 0 -48 -2 -51 -27z"></path><path d="M700 2932 c0 -115 3 -243 6 -285 l7 -77 47 0 c34 0 50 4 54 16 8 20
    8 518 0 538 -5 12 -20 16 -60 16 l-54 0 0 -208z"></path><path d="M896 2873 c2 -148 4 -274 4 -280 0 -9 18 -13 55 -13 l55 0 0 264 c0
    145 -3 271 -6 280 -5 12 -20 16 -59 16 l-54 0 5 -267z"></path><path d="M1108 3133 c-17 -4 -18 -26 -18 -277 l0 -273 46 -7 c25 -3 50 -3 55
    0 5 3 9 131 9 285 l0 279 -37 -1 c-21 -1 -46 -3 -55 -6z"></path><path d="M4555 3074 c-102 -53 -130 -156 -72 -258 57 -100 207 -103 279 -5 69
    93 44 210 -55 258 -51 25 -110 27 -152 5z"></path><path d="M4972 2948 c-19 -19 -14 -73 8 -93 16 -15 44 -18 172 -22 144 -5 154
    -4 171 15 27 29 19 83 -13 99 -34 17 -321 18 -338 1z"></path><path d="M4122 2919 c-19 -7 -23 -15 -20 -41 l3 -33 79 0 c71 0 79 2 87 21 5
    14 2 29 -7 43 -12 17 -25 21 -67 20 -29 0 -62 -4 -75 -10z"></path><path d="M4867 2642 c-46 -48 -38 -65 86 -195 111 -116 113 -118 143 -107 33
    12 58 47 52 73 -3 17 -233 257 -246 257 -4 0 -20 -13 -35 -28z"></path><path d="M4193 2540 c-64 -67 -113 -127 -113 -138 0 -26 31 -52 62 -52 19 0
    54 28 137 111 118 117 130 140 91 179 -37 37 -59 25 -177 -100z"></path><path d="M4570 2550 c-18 -18 -20 -33 -20 -190 0 -169 0 -171 25 -196 26 -26
    56 -26 82 0 15 14 22 344 8 367 -11 17 -47 39 -64 39 -6 0 -20 -9 -31 -20z"></path><path d="M10 2370 c0 -44 -1 -83 -2 -87 -2 -5 22 -11 52 -14 102 -11 191 -74
    237 -167 26 -53 28 -65 26 -162 -1 -68 -11 -146 -27 -220 -13 -63 -40 -189
    -60 -280 -19 -91 -46 -210 -59 -265 -13 -55 -43 -181 -66 -280 -22 -99 -50
    -211 -61 -250 -11 -38 -20 -80 -20 -92 l0 -23 669 0 669 0 17 77 c9 43 23 103
    32 133 8 30 23 93 34 140 11 47 29 119 40 160 12 41 27 104 34 140 7 36 27
    110 43 165 16 55 33 123 36 151 l7 50 452 -3 c291 -2 470 0 501 7 32 7 62 23
    89 46 51 47 125 138 137 170 6 14 10 130 10 257 l0 232 497 0 498 0 1 60 c1
    33 -1 77 -4 98 l-4 37 -1889 0 -1889 0 0 -80z m1852 -205 c4 -78 10 -104 34
    -152 47 -94 128 -150 245 -169 31 -5 41 -2 69 23 l33 29 -58 45 c-32 24 -72
    61 -89 82 -29 36 -31 45 -34 133 -2 52 -2 95 0 95 1 1 119 3 261 5 l257 4 0
    -237 c0 -229 -1 -237 -22 -260 l-21 -23 -427 0 c-235 0 -429 2 -432 5 -3 3 3
    45 14 93 36 158 78 374 78 398 0 22 4 24 44 24 l43 0 5 -95z m-957 -869 c60
    -46 60 -132 0 -185 -46 -40 -93 -48 -142 -25 -73 36 -108 137 -65 191 44 57
    145 66 207 19z"></path><path d="M20 390 c0 -27 20 -66 82 -160 66 -98 102 -136 163 -168 50 -25 52
    -26 365 -33 173 -4 406 -8 518 -8 l203 -1 -3 190 -3 191 -662 5 -663 6 0 -22z"></path></g><g transform="translate(0.000000,367.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M4567 3652 c-14 -16 -17 -44 -17 -184 0 -147 2 -167 18 -181 24 -22
    65 -22 85 1 13 14 16 49 19 185 2 157 1 170 -17 183 -26 20 -69 17 -88 -4z"></path><path d="M4091 3434 c-12 -15 -21 -36 -21 -47 0 -22 227 -257 248 -257 21 0
    72 56 72 79 0 14 -38 59 -105 126 -139 138 -156 147 -194 99z"></path><path d="M4952 3340 c-61 -66 -112 -124 -112 -129 0 -19 52 -71 71 -71 10 0
    38 21 61 47 24 25 76 78 116 118 39 39 72 79 72 87 0 28 -40 68 -68 68 -22 0
    -50 -24 -140 -120z"></path><path d="M3517 3263 c-4 -3 -7 -33 -7 -65 l0 -58 -549 0 -549 0 -4 -101 c-3
    -98 -4 -101 -34 -129 -32 -28 -33 -28 -218 -35 -103 -4 -207 -5 -232 -2 -82 9
    -114 61 -114 187 l0 80 -264 0 -265 0 2 -280 2 -281 1255 0 1255 1 0 65 0 65
    78 0 77 0 0 180 c0 99 1 183 3 188 1 4 -27 8 -63 10 -86 3 -100 19 -100 113
    l0 69 -133 0 c-74 0 -137 -3 -140 -7z"></path><path d="M10 2855 l0 -285 38 0 c22 0 73 3 115 6 l77 7 0 278 0 279 -115 0
    -115 0 0 -285z"></path><path d="M326 3124 c-8 -21 -8 -434 0 -501 l7 -53 47 0 47 0 6 68 c9 86 9 465
    1 486 -4 12 -20 16 -54 16 -34 0 -50 -4 -54 -16z"></path><path d="M519 3113 c-2 -16 -2 -144 -1 -285 l4 -258 47 0 48 0 6 83 c9 105 9
    265 0 390 l-6 97 -47 0 c-44 0 -48 -2 -51 -27z"></path><path d="M700 2932 c0 -115 3 -243 6 -285 l7 -77 47 0 c34 0 50 4 54 16 8 20
    8 518 0 538 -5 12 -20 16 -60 16 l-54 0 0 -208z"></path><path d="M896 2873 c2 -148 4 -274 4 -280 0 -9 18 -13 55 -13 l55 0 0 264 c0
    145 -3 271 -6 280 -5 12 -20 16 -59 16 l-54 0 5 -267z"></path><path d="M1108 3133 c-17 -4 -18 -26 -18 -277 l0 -273 46 -7 c25 -3 50 -3 55
    0 5 3 9 131 9 285 l0 279 -37 -1 c-21 -1 -46 -3 -55 -6z"></path><path d="M4555 3074 c-102 -53 -130 -156 -72 -258 57 -100 207 -103 279 -5 69
    93 44 210 -55 258 -51 25 -110 27 -152 5z"></path><path d="M4972 2948 c-19 -19 -14 -73 8 -93 16 -15 44 -18 172 -22 144 -5 154
    -4 171 15 27 29 19 83 -13 99 -34 17 -321 18 -338 1z"></path><path d="M4122 2919 c-19 -7 -23 -15 -20 -41 l3 -33 79 0 c71 0 79 2 87 21 5
    14 2 29 -7 43 -12 17 -25 21 -67 20 -29 0 -62 -4 -75 -10z"></path><path d="M4867 2642 c-46 -48 -38 -65 86 -195 111 -116 113 -118 143 -107 33
    12 58 47 52 73 -3 17 -233 257 -246 257 -4 0 -20 -13 -35 -28z"></path><path d="M4193 2540 c-64 -67 -113 -127 -113 -138 0 -26 31 -52 62 -52 19 0
    54 28 137 111 118 117 130 140 91 179 -37 37 -59 25 -177 -100z"></path><path d="M4570 2550 c-18 -18 -20 -33 -20 -190 0 -169 0 -171 25 -196 26 -26
    56 -26 82 0 15 14 22 344 8 367 -11 17 -47 39 -64 39 -6 0 -20 -9 -31 -20z"></path><path d="M10 2370 c0 -44 -1 -83 -2 -87 -2 -5 22 -11 52 -14 102 -11 191 -74
    237 -167 26 -53 28 -65 26 -162 -1 -68 -11 -146 -27 -220 -13 -63 -40 -189
    -60 -280 -19 -91 -46 -210 -59 -265 -13 -55 -43 -181 -66 -280 -22 -99 -50
    -211 -61 -250 -11 -38 -20 -80 -20 -92 l0 -23 669 0 669 0 17 77 c9 43 23 103
    32 133 8 30 23 93 34 140 11 47 29 119 40 160 12 41 27 104 34 140 7 36 27
    110 43 165 16 55 33 123 36 151 l7 50 452 -3 c291 -2 470 0 501 7 32 7 62 23
    89 46 51 47 125 138 137 170 6 14 10 130 10 257 l0 232 497 0 498 0 1 60 c1
    33 -1 77 -4 98 l-4 37 -1889 0 -1889 0 0 -80z m1852 -205 c4 -78 10 -104 34
    -152 47 -94 128 -150 245 -169 31 -5 41 -2 69 23 l33 29 -58 45 c-32 24 -72
    61 -89 82 -29 36 -31 45 -34 133 -2 52 -2 95 0 95 1 1 119 3 261 5 l257 4 0
    -237 c0 -229 -1 -237 -22 -260 l-21 -23 -427 0 c-235 0 -429 2 -432 5 -3 3 3
    45 14 93 36 158 78 374 78 398 0 22 4 24 44 24 l43 0 5 -95z m-957 -869 c60
    -46 60 -132 0 -185 -46 -40 -93 -48 -142 -25 -73 36 -108 137 -65 191 44 57
    145 66 207 19z"></path><path d="M20 390 c0 -27 20 -66 82 -160 66 -98 102 -136 163 -168 50 -25 52
    -26 365 -33 173 -4 406 -8 518 -8 l203 -1 -3 190 -3 191 -662 5 -663 6 0 -22z"></path></g></svg>`,
  runner: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m15 10.42 4.8-5.07"></path><path d="M19 18h3"></path><path d="M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14"></path></svg>`,
  fastfingers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 14a8 8 0 0 1-8 8"/><path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"/><path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
  evasion: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g opacity="0.35"><circle cx="16" cy="8.5" r="3.2"/><path d="M10.8 19a5.2 5.2 0 0 1 10.4 0"/></g><circle cx="9" cy="8" r="4"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/></svg>`,
  fastflick: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 19h6"/><path d="M9 15v-3H5l7-7 7 7h-4v3H9z"/></svg>`,
  hotstart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
  backstabber: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M13 22H4a2 2 0 0 1 0-4h12"></path><path d="M13.236 18a3 3 0 0 0-2.2-5"></path><path d="M16 9h.01"></path><path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"></path><path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"></path></svg>`,
  openingduel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" x2="19" y1="19" y2="13"></line><line x1="16" x2="20" y1="16" y2="20"></line><line x1="19" x2="21" y1="21" y2="19"></line><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline><line x1="5" x2="9" y1="14" y2="18"></line><line x1="7" x2="4" y1="17" y2="20"></line><line x1="3" x2="5" y1="19" y2="21"></line></svg>`,

  smg: `<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 54.375"
    style="width:100%;height:100%;transform:scaleX(-0.8) scaleY(0.8)">
<path fill="currentColor" d="M0,10.3c0,3.1,0.7,3.2,0.7,3.2l22.2,0c0,0,0.1,0.4,0.2,0.9c0.1,0.5,0.3,0.7,0.4,0.7    c0.2,0,0.3-0.2,0.3-0.2l28.7,0.2c0,0,0.1,0.2,0.3,0.2c0.1,0,0.3-0.1,0.3-0.4c0.1-0.3,0.2-0.7,0.2-0.7l0.4,0c0,0,0.1,0.1,0.2,0.2    c0.1,0,0.6,0,0.7,0.3c0.3,0.5,0.4,1.1,0.2,2c-0.1,0.8-0.4,1.7-0.4,1.7l0.3,0.3c0,0,0,3.5-3.1,11.2c-3.1,7.8-5.3,10.6-5.3,10.6    s-0.1,0.1-0.1,0.2s0.1,0.2,0.1,0.2l3.8,2.5c0,0,0.2,0,0.4-0.1c0.2-0.1,0.3-0.3,0.3-0.3s2.8-4.6,5.1-10.4    c2.3-5.8,3.8-11.9,3.8-11.9l1.5,0.1c0,0,0.4,1,0.5,1.3c0.2,0.3,0.5,1.2,0.5,1.2l0.3-0.2c0,0-0.2-0.9-0.4-1.2c-0.2-0.3-0.4-1-0.4-1    s1,0,1.5,0.1c0.4,0.1,1.2,0.9,1.5,2c0.3,1,0.8,2.3,1.1,2.9c0.3,0.6,1,1.2,2,1.2c0.7,0,4,0.1,4.6,0c0.6,0,1.6-0.7,2.4-1.1    c1-0.5,1.7-0.7,2.5,0.1c0.8,0.8,0.3,1.4,0.5,1.7c0.1,0.2,0.6,0.3,1.1,1.4c0.5,1.1,0.4,1.9,0.6,2.3c0.2,0.4,0.7,0.4,1.1,1.4    c0.5,1.1,0.2,2.3,0.5,2.8c0.3,0.4,1-0.1,1-0.1s6.1-3.5,6.6-3.8c0.5-0.3,0.3-0.7,0.1-1.2c-0.2-0.4-0.7-1.9-2.5-4.4    c-1.8-2.6-3.3-3.5-3.5-4.9s0.3-2.6,1-3.3c0.7-0.7,1-0.8,1.1-1c0.1-0.2,0.1-0.4,0.1-0.4s3.6,0,4.5,0c0.8,0,2.5-3.1,2.5-3.1    s0.2,0,0.2,0.3c-0.1,0.6-0.9,1.4-1.2,2c-0.2,0.5-0.3,1.2,0.2,1.4c0.5,0.2,1.8,0.3,2.2-0.1c0.4-0.3,0.4-1.1,0.1-1.8    c-0.4-0.7-0.6-1.1-0.4-1.2c0.3-0.3,0.5,0.4,0.8,0.7c0.3,0.3,0.9,0.8,1.1,2.2c0.2,1.4,0.8,4,1.6,6.2c0.8,2.1,1.3,2.9,1.9,2.9    c0.6,0,0.6-0.5,0.9-0.9s0.6-0.2,0.5-0.9c-0.1-0.5-1-4-1.4-6.4c-0.5-2.7-0.2-8.6-0.3-9.2c-0.1-0.6-0.8-1.5-1.7-1.5    s-3.3,0.6-3.7,0.8c-0.4,0.2-0.7,1-0.7,1s-0.6-1.6-1.3-2.7c-0.6-0.9-1-1.4-1.5-1.4c-0.5,0-2.3,0-2.3,0s0-0.2-0.2-0.2    c-0.3,0-0.3,0.2-0.3,0.2h-2.4l-0.1,0.2l-1.2,0c0,0,0-1.3,0-1.8c0-0.5-0.7-1.3-1.5-1.3C80.7,2,80,2,80,2s-0.2-0.4-0.4-0.4    c-0.4,0-2.5,1-2.7,1.2c-0.1,0.2,0.8,1.5,0.8,1.5L77.1,5h-8.7l0-0.6l-0.2,0l0,0.4h-2.5l0-0.4l-0.2,0v0.8l-0.5,0l-0.1-0.4H53    l-0.1,0.1l-7.2,0L45.5,5h-6.9c0,0,0.6-0.8,0.6-1.5c0-0.7-0.6-1.6-1.8-1.6c-1,0-1.3,0.7-1.3,1.1c0,0.5,0.4,0.9,0.5,1.2    c0.1,0.3,0,0.8,0,0.8H26.3c0,0,0-1.2,0-2.6c0-1.2,0-1.8,0-1.9c-0.1-0.2-0.5-0.3-0.9-0.3c-0.4-0.1-0.8-0.1-0.9,0    c-0.1,0.1-0.5,0.9-0.6,2.4c-0.1,1.5-0.1,2.3-0.1,2.3h-0.3c0,0-0.2,0.3-0.2,1c0,0.7-0.1,1.4-0.1,1.4l-22.3,0C0.8,7.1,0,7.2,0,10.3z     M65.2,21.5c0-0.3,0.2-0.4,0.2-0.4h4.9c0,0,1.1,0.7,1,2.5c0,0.8-0.8,1.8-0.9,2c-0.1,0.2,0,0.5,0.2,0.5c0.2,0,0.6-0.3,1.1-0.8    c0.5-0.5,0.8-1.4,0.9-2.5c0-1.1-0.2-1.6-0.2-1.6h1.9c0,0,0.7,1.2,1.1,2.3c0.2,0.5,0.3,1.1,0.2,1.4c-0.1,0.3-0.6,0.7-1.1,1    c-0.5,0.3-1.5,0.7-2,0.7c-0.4,0.1-4.2,0.1-4.8-0.1c-0.5-0.1-0.9-0.7-1.1-1.3C66.2,24.4,65.2,21.7,65.2,21.5z"></path>  </svg>`,
  pistols: `<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 24"
    style="width:100%;height:100%">
    <path fill="currentColor" d="M30.952 2.418c.011-.137.11-.58-.012-.687-.181-.161-.389.075-.324-.29.112-.537-.823-.442-1.12-.421-.787.057-1.577.03-2.367.027l-6.347-.025c0 .223.113.788-.019.981-.098.144-.663.05-.797.05H17.42c-.343 0-.725.163-.718-.255.001-.135.05-.4-.158-.394-.103.002-.417.101-.4-.1.027-.358-.149-.251-.484-.252l-10.568-.03v.58l-.906-.032c0 .457-.486.686-.679 1.096-.163.344-.442.738-.648 1.1a2.072 2.072 0 00-.248 1.112c.035.377-.014.37-.287.554-.169.114-.114.713-.157.917-.052.25-.07.595-.028.847.038.226.138.142.29.229.073.042.05.141.127.19.249.16.625.186.895.316.639.312 1.306.834 1.739 1.405.226.297-.022.47.002.806.02.253-.229.465-.229.645 0 .2-.267.717-.365.888-.066.12-.316.487-.308.595.007.116-.27.694-.345.801-.15.21-.25.562-.34.808-.167.46-.421.948-.679 1.418-.102.185-.166.497-.241.705-.095.265-.103.54-.196.807-.202.581-.305 1.297-.329 1.907-.007.168-.15.19-.152.36-.003.153.012.31.012.462-.001.407-.02.816-.02 1.223 0 .89 1.442.193 1.92.454.181.1-.039.43.299.542.236.078.506.068.73.187.43.232 1.163.383 1.654.429.925.085 1.868.177 2.773.404.354.088.542.223.915.223.362 0 .718-.065 1.077-.065.224 0 .648.197.648-.185 0-.138-.595-.283-.693-.4-.37-.445-.552-1.606-.31-2.13.136-.296.188-.77.252-1.095.06-.315.247-.569.318-.876.124-.541.352-.975.513-1.518.136-.458.365-.894.437-1.368.055-.37.245-.836.222-1.2-.017-.301.101-.75.16-1.05.046-.241.152-.294.388-.297 2.041-.018 4.083 0 6.122 0 .874 0 1.746-.013 2.618.025.093.004.55.051.55-.121 0-.288.197-.687-.096-.85-.157-.088-.032-1.288-.032-1.489 0-.316-.038-.63-.041-.947-.007-.584.188-.78.591-1.163.216-.206 1.033-.063 1.335-.063h4.507c.318 0 2.015.23 2.073-.176.13-.897.01-1.898.01-2.805 0-.929-.063-1.883.012-2.809zM7.357 22.357c.093-.007.185.043.226.064-.08-.017-.154-.027-.226-.064zm14.53-10.66c-.045.301-.297.17-.555.154 0 .5-.086.42-.59.42h-1.948c-1.154 0-2.317-.048-3.468.031-.566.04-.396-.4-.426-.808-.028-.395-.295-.718-.323-1.12-.029-.4.316-.705.316-1.086 0-.343.445-.523.584-.79.142-.151.634-.391.837-.322.378.13.13 1.263.101 1.547-.055.544.37.744.638 1.138.277.403.589.564 1.02.784.316.16.735.132 1.08.113.216-.012.314-.46.158-.544-.059-.032-.44.052-.44-.041 0-.012-.308-.139-.327-.149-.348-.168-.685-.39-.926-.696-.348-.44-.233-1.066-.233-1.588 0-.206.144-.523.353-.565.76-.156 1.607.046 2.381.011.5-.022.927-.008 1.273.372.13.142.526.284.525.416-.006.627-.007 1.256.004 1.883.006.28.009.562-.033.84z"></path>
  </svg>`,
  assault: `<svg viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M66.022 6.364l-.192-.421-1.033-.106V3H63.68v.184l-.082.394c-.072.07-.154.237-.245.5L63 4.84l-.463.998-.328.106h-4.273l-.517-.316-.654-.657-.735-.867h-4.872l-.49-.158-.546-.158-.653-.21-11.652-.105-.653.053c-.146.034-.246.078-.3.131l-.164.132H21.564l-.218-.211-2.477 2.05-1.524.446-1.171.29-.68.157-1.144-.237-.762-.236-3.948.237-2.668.21-1.198.027-1.388-.026-1.198.288a3.09 3.09 0 00-1.007.473l.544 7.437 6.453-2.05 4.872-1.734 1.852-.63 1.634-.58 1.225-.393.544-.184c.254-.053.49.026.708.236l.464.315-.49.632-.817 1.444-.79 1.446-.41.841c.09.63.31 1.051.655 1.262a2.2 2.2 0 001.142.263l1.09-.237.49-.211a4.726 4.726 0 01.708-1.55c.326-.543.68-1.034 1.062-1.472l1.006-1.024.518-.394c.472.367.963.578 1.47.63l1.28-.08a4.469 4.469 0 001.306-.471l.817.131.219-.184.298-.026c.599 1.751 1.353 3.258 2.26 4.52.908 1.295 1.787 2.373 2.64 3.231.98 1 2.016 1.857 3.105 2.576l1.225-1.919.897-1.366.49-.604c-1.488-1.016-2.63-2.032-3.43-3.048-.78-.998-1.352-1.91-1.715-2.734-.418-.945-.627-1.865-.627-2.758h3.73l.382.236c.036.07.108.114.218.132l.517.08.517-.106.708-.368.98-.5h8.222l.081-.446h5.228l.435.315.38-.447h7.324l.87.342.464-.788h.327l.298.078.464-.157.136-.263-.135-.316zm-37.788 4.099c-.164.175-.38.263-.653.263h-1.47c-.29 0-.544-.088-.763-.263a.82.82 0 01-.272-.605c0-.28.09-.517.272-.71.219-.174.472-.254.763-.236l1.47-.027c.272 0 .49.088.653.263.163.192.246.43.246.71l-.246.605z"/></svg>`,
  sniper: `<svg viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M78.055 9.81l-.107-.27-.136-.297v-.109H33.564v-.622l1.288-.026.75.136v-.11l5.23.325h.16l-.053-3.08-.107-.081-.885-.108-1.636.135-1.744.189-1.286.189h-3.889v-.135c.09 0 .153-.036.187-.108l.08-.081L31.393 5h-.026l-2.227.136v.432l.055.136v.459l-.752.054-1.154.027h-2.332l-1.073-.081-1.501.081-1.288.081-.563.054h-.134l-.053.055c-.054.053-.082.152-.082.297v.73l.081 1.162v.08l.054.136 1.313.08 1.502-.135 1.288-.161.67-.11H26v.676h-2.253c-.088.036-.142.082-.16.135l-.268.055-.859.162-1.045.187h-.053v.163l-.136.675-.213.675h-7.242l-.723-.73c-.143-.143-.286-.225-.43-.243H6.236l-.213.163-.134.08-.082.055-.054.054h-.696l-2.388.162c-.357.162-.536.315-.536.46v1.783L2 15.429v3.107l.054.459.08.082h.187l.643-.135.858-.19.832-.134.536-.082h1.771l.911.188.322-.188c.09 0 .143-.072.162-.216l.267-1.729h3.513l.509.378.805.73.75.81 1.02.352 1.824.297 1.878.242 1.26-.136.375-.54.323-1.026.187-1.08.026-.838h.215l.108-.054c.59.36 1.116.558 1.581.594l1.233-.109.806-.431.429-.352c.07-.09.267-.136.59-.136v1.946l6.14-.648v-1.892c.037-.054.242-.126.618-.216l1.287-.351 1.234-.352.67-.188 5.203.054c-.34.144-.635.216-.885.216-.107-.126-.384-.189-.832-.189h-.08c-.214 0-.322.108-.322.324-.143.27-.125.612.055 1.027l.347.81.134.136h1.074l.134-.405-.188-.189-.134-.081.134-.27H51.64l.134-.324v-.082l.054-.081.053-.216c0-.307-.08-.523-.24-.648l-.296-.298v-1.837h-2.091v-.486h28.48l.08-.135c.215-.325.322-.577.322-.757l-.08-.35zM24.15 15.24h-1.5c-.41 0-.616-.226-.616-.676 0-.379.206-.567.616-.567h1.502c.411 0 .617.188.617.567 0 .45-.205.676-.617.676z"/></svg>`,
  control: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
  hawk: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 2v3h3"/><path d="M13.4 10.6 22 2"/><circle cx="12" cy="12" r="2"/><path d="M12.3 6H12a6 6 0 1 0 6 6v-.3"/><path d="M15 2.5A9.93 9.93 0 1 0 21.5 9"/><path d="M5.3 19.4 4 22"/><path d="M18.7 19.4 20 22"/></svg>`,
  precision: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>`,
  spray: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="13" r="2.8"/><path d="M1 21.5a4.5 4.5 0 0 1 9 0"/><circle cx="18.5" cy="13" r="2.8"/><path d="M14 21.5a4.5 4.5 0 0 1 9 0"/><path d="M6 8A9 9 0 0 1 18 8"/><path d="M16.8 4.4 18 8 14.3 7.2"/></svg>`
};
// ============================================================
// 02. TALENT GROUPS
// ============================================================
const groups = {
 Weaponscraft:[['SMG Mastery',3,'smg'],['Pistols Mastery',5,'pistols'],['Assault Rifles Mastery',5,'assault'],['Sniper Mastery',3,'sniper'],['Control Mastery',1,'control'],['Hawk Eye',1,'hawk'],['Spray Transfer',1,'spray'],['Precision Mastery',1,'precision']],
 Aggression:[['Point Blank',3,'pointblank'],['Runner',1,'runner'],['Fast Fingers',1,'fastfingers'],['Evasion',5,'evasion'],['Fast Flick',3,'fastflick'],['Hot Start',1,'hotstart'],['Backstabber',5,'backstabber'],['Opening Duel',1,'openingduel']],
 Composure:[['Calmness',5,'calmness'],['Resilient',5,'resilient'],['Patience',1,'patience'],['Bounce Back',5,'bounceback'],['Lone Ranger',3,'loneranger'],['Slow Burn',1,'slowburn'],['Clutch',1,'clutch']],
 Synergy:[['Focus Fire',5,'focusfire'],['Comms Boost',5,'commsboost'],['Team Rhythm',1,'teamrhythm'],['Firing Line',5,'firingline'],['Trade Kill',1,'tradekill']]
};
// ============================================================
// 03. TALENT DESCRIPTIONS
// ============================================================
const talentDescriptions = {
  "SMG Mastery": [
  "Reduces leg shots with submachineguns at close range by ",
  ["6%", "12%", "18%", "24%"],
  " — those hits land on the chest instead."
  ],
  "Pistols Mastery": [
    "Reduces leg shots with pistols by ",
    [
      "3%",
      "6%",
      "9%",
      "12%",
      "15%",
      "18%"
    ],
    "."
  ],
  "Assault Rifles Mastery": [
    "Reduces leg shots with rifles by ",
    [
      "3%",
      "6%",
      "9%",
      "12%",
      "15%",
      "18%"
    ],
    "."
  ],
  "Sniper Mastery": [
    "Reduces leg shots with sniper rifles by ",
    [
      "6%",
      "12%",
      "18%",
      "24%"
    ],
    "."
  ],
  "Control Mastery": [
    "Recoil penalty during sustained fire reduced by ",
    [
      "5%",
      "7%"
    ],
    "."
  ],
  "Hawk Eye": [
    "Long distance aim penalty reduced by ",
    [
      "30%",
      "35%"
    ],
    "."
  ],
  "Spray Transfer": [
    "Adds ",
    [
      "3%",
      "4%"
    ],
    " to the hit-chance ceiling when you switch targets."
  ],
  "Precision Mastery": [
    "Increases your maximum headshot chance by ",
    [
      "3%",
      "4%"
    ],
    "."
  ],
  "Point Blank": [
    "Gain ",
    [
      "3 steps",
      "4 steps",
      "5 steps",
      "6 steps"
    ],
    " of point blank range — the first bullet you fire at an enemy inside it is always a headshot."
  ],
  "Runner": [
    "Enemies are 0.25% more likely to miss you for every step you take while moving, up to ",
    [
      "2%",
      "3%"
    ],
    " in total."
  ],
  "Fast Fingers": [
    "Adds ",
    [
      "3%",
      "4%"
    ],
    " to the first-shot accuracy boost your quickness gives."
  ],
  "Evasion": [
    "Enemies are up to ",
    [
      "0.5%",
      "1%",
      "1.5%",
      "2%",
      "2.5%",
      "3%"
    ],
    " more likely to miss you, on top of what your movement skill already gives."
  ],
  "Fast Flick": [
    "Turn ",
    [
      "1 deg",
      "2 deg",
      "3 deg",
      "4 deg"
    ],
    " faster per tick when snapping onto a target from outside your view while moving."
  ],
  "Hot Start": [
    "Starts the round with ",
    [
      "4%",
      "5%"
    ],
    " extra headshot chance, losing 0.5% at every stationary point reached."
  ],
  "Backstabber": [
    "Decreases miss chances by ",
    [
      "0.5%",
      "1%",
      "1.5%",
      "2%",
      "2.5%",
      "3%"
    ],
    " when backstabbing."
  ],
  "Opening Duel": [
    "Reduces your miss chance by ",
    [
      "6%",
      "7.5%"
    ],
    " if you are the first to engage in the round, for the whole fight."
  ],
  "Calmness": [
    "Gain a ",
    [
      "0.5%",
      "1%",
      "1.5%",
      "2%",
      "2.5%",
      "3%"
    ],
    " reduction to your miss chance while stationary."
  ],
  "Resilient": [
    "Reduces the low-HP penalty by ",
    [
      "3%",
      "6%",
      "9%",
      "12%",
      "15%",
      "17%"
    ],
    "."
  ],
  "Patience": [
    "Reduces your miss chance by ",
    [
      "3%",
      "4%"
    ],
    " while held in a waitpoint."
  ],
  "Bounce Back": [
    "After a round where you died with no impact, all your skills are increased by ",
    [
      "0.2%",
      ".4%",
      ".6%",
      ".8%",
      "1%",
      "1.2%"
    ],
    " for the next round."
  ],
  "Lone Ranger": [
    "Increases all skills by ",
    [
      "0.2%",
      ".4%",
      ".6%",
      ".8%"
    ],
    " while you are the only one of your team in the fight."
  ],
  "Slow Burn": [
    "Headshot chance grows by ",
    [
      "0.5%",
      ".75%"
    ],
    " for every stationary point reached this round — syncpoints, waitpoints, camps and afterplants, stopping after 12 of them."
  ],
  "Clutch": [
    "Increases headshot chance by ",
    [
      "4%",
      "5%"
    ],
    " and your maximum turn speed by 1 degree, while all your teammates are dead or the bomb is planted."
  ],
  "Focus Fire": [
    "Gain a ",
    [
      "0.5%",
      "1%",
      "1.5%",
      "2%",
      "2.5%",
      "3%"
    ],
    " reduction to your miss chance while a teammate is shooting the same enemy."
  ],
  "Comms Boost": [
    "Increases the chance to follow a teammate's target by ",
    [
      "0.5%",
      "1%",
      "1.5%",
      "2%",
      "2.5%",
      "3%"
    ],
    " for 10 seconds."
  ],
  "Team Rhythm": [
    "Every assist reduces miss chance by ",
    [
      "1%",
      "1.5%"
    ],
    "."
  ],
  "Firing Line": [
    "Reduces the long-distance stacking penalty by ",
    [
      "1%",
      "2%",
      "3%",
      "4%",
      "5%",
      "6%"
    ],
    "."
  ],
  "Trade Kill": [
    "Shooting an enemy within 3 seconds after they killed a teammate cuts leg shots by ",
    [
      "3%",
      "4%"
    ],
    " on that shot."
  ]
};

const prereq={'Precision Mastery':'Hawk Eye','Spray Transfer':'Control Mastery','Evasion':'Runner','Fast Flick':'Fast Fingers','Backstabber':'Evasion','Opening Duel':'Fast Flick','Patience':'Calmness','Slow Burn':'Patience','Clutch':'Lone Ranger','Team Rhythm':'Focus Fire'};
const minLevel={'Pistols Mastery':2,'SMG Mastery':2,'Assault Rifles Mastery':10,'Sniper Mastery':10,'Control Mastery':15,'Hawk Eye':20,'Precision Mastery':25,'Spray Transfer':25,'Point Blank':2,'Runner':2,'Fast Fingers':10,'Evasion':15,'Fast Flick':15,'Hot Start':15,'Backstabber':20,'Opening Duel':25,'Calmness':2,'Resilient':2,'Patience':10,'Bounce Back':15,'Lone Ranger':15,'Slow Burn':20,'Clutch':25,'Focus Fire':2,'Comms Boost':10,'Firing Line':15,'Team Rhythm':15,'Trade Kill':20};
const ranks={};
const innateSlots = Array(5).fill(null);
let innatePickerSlot = -1;
const innateOf = name => innateSlots.includes(name) ? 1 : 0;
const xpNode=()=>document.getElementById('experienceValue');
const level=()=>Math.max(0,Math.min(60,parseInt(xpNode()?.textContent,10)||0));
const spent=()=>Object.values(ranks).reduce((a,b)=>a+b,0);
const cap=name=>Object.values(groups).flat().find(t=>t[0]===name)?.[1]||1;
const budget=()=>Math.max(0,level()-1);
const weaponMasteries = [
  'Pistols Mastery',
  'SMG Mastery',
  'Assault Rifles Mastery',
  'Sniper Mastery'
];

const weaponPoints = () =>
  weaponMasteries.reduce((sum, name) => sum + (ranks[name] || 0), 0);

const eligible = name =>
  level() >= (minLevel[name] || 1) &&
  (!['Control Mastery', 'Hawk Eye'].includes(name) || weaponPoints() >= 5) &&
  (!prereq[name] || (ranks[prereq[name]] || 0) >= cap(prereq[name]));
// ===== TALENT POPUP / HTML =====
const overlay=document.createElement('div');overlay.id='sw-talent-overlay';overlay.className='sw-talent-hidden';
overlay.innerHTML=`<div class="sw-talent-modal" role="dialog" aria-modal="true" aria-label="Talent tree"><div class="sw-talent-head"><strong>INNATE TALENTS</strong><div id="sw-innate-slots" class="sw-innate-slots" aria-label="Innate talents"></div><span id="sw-talent-points"></span><button type="button" id="sw-talent-reset">RESET</button><button type="button" id="sw-talent-close" aria-label="Fechar">✕</button></div><div class="sw-talent-columns" id="sw-talent-columns"></div><div class="sw-talent-footer">

<div class="sw-player-role">
    <div class="sw-role-options">
    <button type="button" class="sw-role-btn" data-role="entry" title="Entry Fragger">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 2-3 8h7l-6 12 1-9H5l8-11Z"/>
        </svg>
    </button>

    <button type="button" class="sw-role-btn" data-role="team" title="Team Player">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="2" width="6" height="6" rx="1"/>
            <rect x="2" y="16" width="6" height="6" rx="1"/>
            <rect x="16" y="16" width="6" height="6" rx="1"/>
            <path d="M12 8v4M5 16v-4h14v4"/>
        </svg>
    </button>

    <button type="button" class="sw-role-btn" data-role="clutch" title="Clutch Player">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>
            <path d="m9 12 2 2 4-4"/>
        </svg>
    </button>

    <button type="button" class="sw-role-btn sw-role-selected" data-role="balanced" title="Balanced">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/>
        </svg>
    </button>
</div>

    <div class="sw-role-name" id="sw-role-name">Balanced</div>
    <div class="sw-role-description" id="sw-role-description">
    A versatile playstyle that balances aggression, survival and teamwork.
</div>
</div>
<div class="sw-best-talents-row"><button type="button" id="sw-best-talents">Generate Best Talents</button><span id="sw-best-talents-status" aria-live="polite"></span></div><div class="sw-innate-picker" id="sw-innate-picker" hidden></div><div class="sw-talent-help">Special thanks to <span style="color: #ffcf4b;">wuzzle</span> for his help and support.</div></div>`;

// ===== VALIDATION =====
function validAfterRemove() {
  let changed = true;

  while (changed) {
    changed = false;

    // Control Mastery exige 5 pontos nas Weapon Masteries
    for (const name of ['Control Mastery', 'Hawk Eye']) {
      if (weaponPoints() < 5 && (ranks[name] || 0) > 0) {
        ranks[name] = 0;
        changed = true;
      }
    }

    // Remove talentos cujos pré-requisitos deixaram de existir
    for (const [name, req] of Object.entries(prereq)) {
      if (
        (ranks[name] || 0) > 0 &&
        (ranks[req] || 0) < cap(req)
      ) {
        ranks[name] = 0;
        changed = true;
      }
    }
  }
}function drawWeaponLinks() {
  const grid = overlay.querySelector('.sw-talent-column[data-group="Weaponscraft"] .sw-talent-grid');
  if (!grid) return;
  const nodes = [...grid.querySelectorAll('.sw-talent-node')];
  if (nodes.length < 8) return;
  let svg = grid.querySelector('.sw-weapons-links');
  if (!svg) {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'sw-weapons-links');
    svg.setAttribute('aria-hidden', 'true');
    grid.prepend(svg);
  }
  
const bounds = grid.getBoundingClientRect();
const scaleX = grid.clientWidth / bounds.width;
const scaleY = grid.clientHeight / bounds.height;

const coords = nodes.map(node => {
  const r = node.getBoundingClientRect();

  return {
    x: (r.left - bounds.left + r.width / 2) * scaleX,
    top: (r.top - bounds.top) * scaleY,
    bottom: (r.bottom - bounds.top) * scaleY,
    left: (r.left - bounds.left) * scaleX,
    right: (r.right - bounds.left) * scaleX
  };
});

  const left = Math.max(2, Math.min(...coords.slice(0,4).map(p=>p.left))-10);
  const right = Math.min(grid.clientWidth-2, Math.max(...coords.slice(0,4).map(p=>p.right))+10);
  const top = Math.max(
  2,
  Math.min(...coords.slice(0, 4).map(p => p.top)) - 10
);

const bottom = Math.min(
  coords[4].top - 4,
  Math.max(...coords.slice(0, 4).map(p => p.bottom)) + 18
);
  const width = grid.clientWidth, height = grid.clientHeight;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', width);
svg.setAttribute('height', height);
svg.setAttribute('preserveAspectRatio', 'none');
  // Layout da referencia: Control (esquerda, linha 3),
  // Hawk Eye (direita, linha 4), Spray/Precision (linha 5).
  
/* WEAPONSCRAFT - LIGAÇÕES */



const lines = [
  // Caixa tracejada → Control Mastery
`M ${coords[4].x} ${bottom - 10} L ${coords[4].x} ${coords[4].top + 2}`,
`M ${coords[5].x} ${bottom - 10} L ${coords[5].x} ${coords[5].top + 2}`,

  // Control Mastery → Spray Transfer
  `M ${coords[4].x} ${coords[4].bottom}
   L ${coords[6].x} ${coords[6].top}`,

  // Hawk Eye → Precision Mastery
  `M ${coords[5].x} ${coords[5].bottom}
   L ${coords[7].x} ${coords[7].top}`
];



  svg.innerHTML = `<rect class="sw-weapon-box" x="${left}" y="${top}" width="${right-left}" height="${bottom-top}" rx="12"/>` +
    lines.map(d=>`<path class="sw-weapon-line" d="${d}"/>`).join('');
}

function drawAggressionLinks() {
  if (overlay.classList.contains('sw-talent-hidden')) return;
  const grid = overlay.querySelector('.sw-talent-column[data-group="Aggression"] .sw-talent-grid');
  if (!grid) return;
  const nodes = [...grid.querySelectorAll('.sw-talent-node')];
  if (nodes.length !== 8) return;
  let svg = grid.querySelector('.sw-aggression-links');
  if (!svg) {
    svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.classList.add('sw-aggression-links');
    svg.setAttribute('aria-hidden','true');
    grid.prepend(svg);
  }
  
const rect = grid.getBoundingClientRect();
const scaleX = grid.clientWidth / rect.width;
const scaleY = grid.clientHeight / rect.height;

const xy = nodes.map(node => {
  const r = node.getBoundingClientRect();

  return {
    x: (r.left - rect.left + r.width / 2) * scaleX,
    top: (r.top - rect.top) * scaleY,
    bottom: (r.bottom - rect.top) * scaleY
  };
});

  svg.setAttribute('viewBox',`0 0 ${grid.clientWidth} ${grid.clientHeight}`);
  svg.setAttribute('width', grid.clientWidth);
svg.setAttribute('height', grid.clientHeight);
svg.setAttribute('preserveAspectRatio', 'none');
  // Fast Fingers -> Fast Flick; Runner -> Evasion -> Backstabber; Fast Flick -> Opening Duel
  const edges = [[2,4],[1,3],[3,6],[4,7]];

svg.innerHTML = edges.map(([a, b]) => {
  const start = xy[a];
  const end = xy[b];

  return `<path d="
    M ${start.x} ${start.bottom}
    L ${end.x} ${end.top}
  "/>`;
}).join('');}

// ===== TALENT CONNECTIONS =====
function drawTalentLinks() { drawWeaponLinks(); drawAggressionLinks(); }
const talentTooltip = document.createElement('div');
talentTooltip.className = 'sw-talent-tooltip';
talentTooltip.setAttribute('role', 'tooltip');
talentTooltip.hidden = true;

// ===== TOOLTIPS =====
function hideTalentTooltip(){ talentTooltip.hidden = true; }
function moveTalentTooltip(e) {
  if (talentTooltip.hidden) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const tooltipRect = talentTooltip.getBoundingClientRect();

  const gap = 10;
  const desiredLeft = rect.right + gap;

  const desiredTop = Math.max(
    10,
    Math.min(
      rect.top + 10,
      window.innerHeight - tooltipRect.height - 10
    )
  );

  talentTooltip.style.position = 'fixed';
  talentTooltip.style.right = 'auto';
  talentTooltip.style.bottom = 'auto';
  talentTooltip.style.transform = 'none';

  // Aplicar posição inicial
  talentTooltip.style.left = `${desiredLeft}px`;
  talentTooltip.style.top = `${desiredTop}px`;

  // Medir a posição real após o zoom
  const actualRect = talentTooltip.getBoundingClientRect();

  const zoom = parseFloat(
    getComputedStyle(document.documentElement).zoom
  ) || 1;

  // Corrigir o desfasamento em coordenadas CSS
  talentTooltip.style.left =
    `${desiredLeft + (desiredLeft - actualRect.left) / zoom}px`;

  talentTooltip.style.top =
    `${desiredTop + (desiredTop - actualRect.top) / zoom}px`;
}

// ===== TOOLTIPS =====
function showTalentTooltip(e,name,max){
  const rank = (ranks[name] || 0) + innateOf(name);
  const data = talentDescriptions[name];
  const requiredLevel = minLevel[name] || 1;
  const req = prereq[name];
  const missingLevel = level() < requiredLevel;
  const missingPrereq = req && (ranks[req] || 0) < cap(req);
  const missingWeaponPoints = ['Control Mastery','Hawk Eye'].includes(name) && weaponPoints() < 5;
  const value = data ? data[1][Math.min(Math.max(rank,1)-1,data[1].length-1)] : '';
  const safe = str => String(str).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  talentTooltip.innerHTML = `<div class="sw-tooltip-head"><strong>${safe(name)}</strong><span>${rank}/${max}</span></div>`+
    (missingLevel ? `<div class="sw-tooltip-require">Requires level ${requiredLevel}</div>` : '')+
    (missingPrereq ? `<div class="sw-tooltip-require">Requires ${safe(req)} maxed</div>` : '')+
    (missingWeaponPoints ? `<div class="sw-tooltip-require">Requires 5 Weapon Mastery points</div>` : '')+
    (data ? `<div class="sw-tooltip-description">${safe(data[0])}<b>${safe(value)}</b>${safe(data[2])}</div>` : '');
  talentTooltip.hidden=false;
  moveTalentTooltip(e);
}

// ===== RENDERING =====

// ===== MAIN RENDER =====
function render(){hideTalentTooltip();const root=overlay.querySelector('#sw-talent-columns');root.replaceChildren();overlay.querySelector('#sw-talent-points').textContent=`LEVEL ${level()}  ·  POINTS LEFT ${Math.max(0,budget()-spent())}`;
for(const [group,items] of Object.entries(groups)){const col=document.createElement('section');col.className='sw-talent-column';col.dataset.group=group;const h=document.createElement('h3');h.textContent=group;col.appendChild(h);const grid=document.createElement('div');grid.className='sw-talent-grid';for(const [name,max,icon] of items){const n=ranks[name]||0;const innate=innateOf(name);const allowed=eligible(name);const btn=document.createElement('button');btn.type='button';btn.className='sw-talent-node'+(n?' sw-active':'')+(innate?' sw-innate':'')+(!allowed?' sw-locked':'');btn.innerHTML=`<span class="sw-talent-icon"></span><span class="sw-talent-rank">${n+innate}/${max+innate}</span>`;const iconElement = btn.querySelector('.sw-talent-icon');

if (talentIcons[icon]) {
  iconElement.innerHTML = talentIcons[icon];
  iconElement.style.display = 'inline-flex';
  iconElement.style.alignItems = 'center';
  iconElement.style.justifyContent = 'center';
  iconElement.style.width = '100%';
  iconElement.style.height = '100%';
  const svg = iconElement.querySelector('svg');
  if (svg) { svg.style.width = '85%'; svg.style.height = '85%'; svg.style.maxWidth = '44px'; svg.style.maxHeight = '44px'; }
} else {
  iconElement.textContent = icon;
}btn.addEventListener('click',()=>{if(!eligible(name)||n>=max||spent()>=budget())return;ranks[name]=n+1;render()});btn.addEventListener('contextmenu',e=>{e.preventDefault();if(!n)return;ranks[name]=n-1;validAfterRemove();render()});btn.addEventListener('pointerenter',e=>showTalentTooltip(e,name,max));btn.addEventListener('pointermove',moveTalentTooltip);btn.addEventListener('pointerleave',hideTalentTooltip);btn.addEventListener('blur',hideTalentTooltip);grid.appendChild(btn);}col.appendChild(grid);root.appendChild(col);}
renderInnateSlots();
requestAnimationFrame(() => {
    drawTalentLinks();
    requestAnimationFrame(drawTalentLinks);
});
}

function innateInfo(name){
  for(const [group, items] of Object.entries(groups)){
    const item=items.find(t=>t[0]===name);
    if(item)return {group, icon:item[2]};
  }
  return null;
}
function makeInnateIcon(icon){
  const el=document.createElement('span');el.className='sw-innate-icon';
  if(talentIcons[icon])el.innerHTML=talentIcons[icon];else el.textContent=icon;
  return el;
}

// ===== INNATE TALENTS =====
function renderInnateSlots(){
  const root=overlay.querySelector('#sw-innate-slots');root.replaceChildren();
  innateSlots.forEach((name,index)=>{
    const btn=document.createElement('button');btn.type='button';btn.className='sw-innate-slot';
    btn.setAttribute('aria-label',name?`Change innate ${index+1}: ${name}`:`Choose innate ${index+1}`);
    if(name){const info=innateInfo(name);btn.dataset.group=info.group;btn.appendChild(makeInnateIcon(info.icon));btn.title=name+' (click to change or remove)';}
    else{btn.textContent='+';btn.title='Choose an innate talent';}
    btn.addEventListener('click',()=>openInnatePicker(index));root.appendChild(btn);
  });
}

// ===== INNATE PICKER =====
function closeInnatePicker(){
  innatePickerSlot=-1;
  const picker=overlay.querySelector('#sw-innate-picker');picker.hidden=true;picker.replaceChildren();
}

// ===== INNATE PICKER =====
function openInnatePicker(index){
  if(innatePickerSlot===index){closeInnatePicker();return;}
  innatePickerSlot=index;
  const picker=overlay.querySelector('#sw-innate-picker');picker.replaceChildren();picker.hidden=false;
  const head=document.createElement('div');head.className='sw-innate-picker-head';
  const heading=document.createElement('strong');heading.textContent=`Innate slot ${index+1}`;head.appendChild(heading);
  const actions=document.createElement('div');
  const remove=document.createElement('button');remove.type='button';remove.textContent='REMOVE';remove.disabled=!innateSlots[index];
  remove.addEventListener('click',()=>{innateSlots[index]=null;closeInnatePicker();render()});actions.appendChild(remove);
  const close=document.createElement('button');close.type='button';close.textContent='✕';close.addEventListener('click',closeInnatePicker);actions.appendChild(close);
  head.appendChild(actions);picker.appendChild(head);
  const categories=document.createElement('div');categories.className='sw-innate-picker-groups';
  for(const [group,items] of Object.entries(groups)){
    const section=document.createElement('section');section.className='sw-innate-picker-group';section.dataset.group=group;
    const label=document.createElement('h4');label.textContent=group;section.appendChild(label);
    const grid=document.createElement('div');grid.className='sw-innate-picker-grid';
    for(const [name,,icon] of items){
      const button=document.createElement('button');button.type='button';button.className='sw-innate-choice';
      button.title=name;button.setAttribute('aria-label',name);button.disabled=innateSlots.includes(name)&&innateSlots[index]!==name;
      if(innateSlots[index]===name)button.classList.add('sw-selected');
      button.appendChild(makeInnateIcon(icon));
      button.addEventListener('click',()=>{innateSlots[index]=name;closeInnatePicker();render()});grid.appendChild(button);
    }
    section.appendChild(grid);categories.appendChild(section);
  }
  picker.appendChild(categories);
}


// ===== OPEN / CLOSE / INITIALIZATION =====
function open(){overlay.classList.remove('sw-talent-hidden');render()}
function close(){hideTalentTooltip();closeInnatePicker();overlay.classList.add('sw-talent-hidden')}
/* =========================================
   PLAYER ROLE SELECTION
========================================= */

let selectedPlayerRole = 'balanced';

overlay.addEventListener('click', (event) => {
    const btn = event.target.closest('.sw-role-btn');

    if (!btn) return;

    selectedPlayerRole = btn.dataset.role;
    const roleDescriptions = {
    entry: 'Aggressive playstyle focused on winning opening duels, speed and accuracy.',
    team: 'Team-oriented playstyle focused on communication, coordination and trade kills.',
    clutch: 'Independent playstyle focused on survival, consistency and high-pressure situations.',
    balanced: 'A versatile playstyle that balances aggression, survival and teamwork.'
};

overlay.querySelector('#sw-role-description').textContent =
    roleDescriptions[selectedPlayerRole];
    const roleNames = {
    entry: 'Entry Fragger',
    team: 'Team Player',
    clutch: 'Clutch Player',
    balanced: 'Balanced'
};

const roleName = overlay.querySelector('#sw-role-name');

roleName.textContent = roleNames[selectedPlayerRole];
roleName.style.color = getComputedStyle(btn)
    .getPropertyValue('--role-color').trim();

    overlay.querySelectorAll('.sw-role-btn').forEach(button => {
        button.classList.toggle(
            'sw-role-selected',
            button === btn
        );
    });
});

// ============================================================
// BEST TALENTS: role-aware, skill-aware, dependency-aware planner
// ============================================================
const swTalentSkillWeights = {
  entry:    {Aim:1.40,Handling:1.12,Quickness:1.48,Determination:1.20,Awareness:.80,Teamplay:.48,Gamesense:.72,Movement:1.12},
  team:     {Aim:1.00,Handling:.95,Quickness:1.00,Determination:.90,Awareness:1.18,Teamplay:1.55,Gamesense:1.38,Movement:.95},
  clutch:   {Aim:1.18,Handling:1.05,Quickness:1.12,Determination:1.45,Awareness:1.20,Teamplay:.50,Gamesense:1.32,Movement:1.10},
  balanced: {Aim:1.20,Handling:1.05,Quickness:1.30,Determination:1.25,Awareness:.85,Teamplay:1.10,Gamesense:1.15,Movement:1.15}
};
const swTalentEffects = {
  'SMG Mastery': {Handling:1,Quickness:.5}, 'Pistols Mastery': {Aim:.9,Handling:.7},
  'Assault Rifles Mastery': {Aim:1,Handling:.9}, 'Sniper Mastery': {Aim:1.2,Awareness:.6},
  'Control Mastery': {Handling:1.4,Aim:.4}, 'Hawk Eye': {Aim:1.3,Awareness:.8},
  'Spray Transfer': {Aim:1.3,Quickness:.6}, 'Precision Mastery': {Aim:1.7},
  'Point Blank': {Aim:.9,Quickness:.8}, 'Runner': {Movement:1.4,Quickness:.6},
  'Fast Fingers': {Quickness:1.5,Handling:.7}, 'Evasion': {Movement:1.3,Awareness:.5},
  'Fast Flick': {Quickness:1.5,Aim:.9}, 'Hot Start': {Determination:1.1,Quickness:1},
  'Backstabber': {Movement:1.1,Gamesense:1.1}, 'Opening Duel': {Aim:1.5,Quickness:1.4},
  'Calmness': {Determination:1.4,Gamesense:.5}, 'Resilient': {Determination:1.3,Awareness:.5},
  'Patience': {Gamesense:1.3,Awareness:.7}, 'Bounce Back': {Determination:1.4,Gamesense:.5},
  'Lone Ranger': {Determination:1.1,Gamesense:1,Awareness:.4},
  'Slow Burn': {Determination:1,Gamesense:1.1}, 'Clutch': {Determination:1.5,Gamesense:1.2},
  'Focus Fire': {Teamplay:1.4,Aim:.6}, 'Comms Boost': {Teamplay:1.4,Awareness:.7},
  'Team Rhythm': {Teamplay:1.6,Gamesense:.7}, 'Firing Line': {Teamplay:1.1,Aim:.8},
  'Trade Kill': {Teamplay:1.4,Quickness:.8}
};
const swRoleTalentBonuses = {
  entry: {'Opening Duel':3,'Fast Flick':1.7,'Hot Start':1.8,'Point Blank':1.5,'Fast Fingers':1.2},
  team: {'Team Rhythm':3,'Focus Fire':1.9,'Comms Boost':1.8,'Trade Kill':2.4,'Firing Line':1.5},
  clutch: {'Clutch':3.5,'Lone Ranger':2.4,'Calmness':1.4,'Resilient':1.2,'Patience':1.3},
  balanced: {'Precision Mastery':1.2,'Fast Fingers':.8,'Calmness':.7,'Focus Fire':.7}
};
function swBuildBestTalents() {
  const status = overlay.querySelector('#sw-best-talents-status');
  const snapshot = typeof window.SkillWhatTalentSnapshot === 'function'
    ? window.SkillWhatTalentSnapshot() : null;
  if (!snapshot || Object.keys(snapshot).length < 8) {
    status.textContent = 'Player skills unavailable. Check main script load order.';
    return;
  }
  const roleWeights = swTalentSkillWeights[selectedPlayerRole] || swTalentSkillWeights.balanced;
  const roleBonuses = swRoleTalentBonuses[selectedPlayerRole] || {};
  const names = Object.values(groups).flat().map(t => t[0]);
  // BEST TALENTS só investe em Assault Rifles Mastery
const excludedMasteries = new Set([
  'SMG Mastery',
  'Pistols Mastery',
  'Sniper Mastery'
]);
  const plan = Object.fromEntries(names.map(name => [name,0]));
  const limit = budget();
  // Prioridade absoluta: Assault Rifles Mastery em todas as Roles
const assaultName = 'Assault Rifles Mastery';
const assaultPoints = level() >= minLevel[assaultName]
  ? Math.min(cap(assaultName), limit)
  : 0;

plan[assaultName] = assaultPoints;
  const getWeaponPoints = () => weaponMasteries.reduce((s,n)=>s+plan[n],0);
  function legal(name) {
    return level() >= (minLevel[name] || 1) && plan[name] < cap(name) &&
      (!['Control Mastery','Hawk Eye'].includes(name) || getWeaponPoints() >= 5) &&
      (!prereq[name] || plan[prereq[name]] >= cap(prereq[name]));
  }
  function value(name, rank) {
    const effects = swTalentEffects[name] || {};
    let result = 0;
    for (const [skill, impact] of Object.entries(effects)) {
      const s = snapshot[skill];
      if (!s) continue;
      // Prefer the player's stronger specialties while still rewarding weak skills.
      const specialty = .8 + .4 * Math.min(110,Math.max(0,s.final)) / 110;
      const remaining = Math.max(0,110-s.final);
      const headroom = .85 + .15 * remaining / 110;
      result += impact * roleWeights[skill] * specialty * headroom;
    }
    result += roleBonuses[name] || 0;
    if (innateOf(name)) result *= 1.12;
    // Diminishing returns prevent spending all points in one multi-rank talent.
    return result / (1 + .14 * rank);
  }
  // Look ahead through prerequisite chains, not only currently unlocked talents.
  function pathway(name, seen = new Set()) {
    if (
        excludedMasteries.has(name) ||
        seen.has(name) || level() < (minLevel[name] || 1) || plan[name] >= cap(name)) return null;
    seen.add(name);
    const steps=[];
    const req=prereq[name];
    if(req && plan[req]<cap(req)) {
      const dependency=pathway(req,new Set(seen));
      if(!dependency) return null;
      steps.push(...dependency);
      const missing=cap(req)-plan[req]-1;
      for(let i=0;i<missing;i++) steps.push(req);
    }
    if(['Control Mastery','Hawk Eye'].includes(name)) {
      let missing=5-getWeaponPoints()-steps.filter(x=>weaponMasteries.includes(x)).length;
      while(missing>0) {
       const choice = weaponMasteries.filter(n =>
  n === 'Assault Rifles Mastery' &&
  level() >= (minLevel[n] || 1) &&
  plan[n] + steps.filter(x => x === n).length < cap(n)
)
.sort((a, b) => value(b, plan[b]) - value(a, plan[a]))[0];
        if(!choice)return null;
        steps.push(choice);missing--;
      }
    }
    steps.push(name);
    return steps;
  }
  let used=assaultPoints;
  while(used<limit) {
    let best=null, bestScore=-Infinity;
    for(const name of names) {
      const steps=pathway(name);
      if(!steps || used+steps.length>limit)continue;
      const simulated={...plan};
      let score=0, valid=true;
      for(const step of steps) {
        if(simulated[step]>=cap(step)){valid=false;break;}
        score+=value(step,simulated[step]);
        simulated[step]++;
      }
      if(!valid)continue;
      const avg=score/steps.length + (steps.length>1 ? value(name,simulated[name]-1)*.18 : 0);
      if(avg>bestScore){bestScore=avg;best=steps;}
    }
    if(!best)break;
    for(const name of best){plan[name]++;used++;}
  }
  for(const name of names)ranks[name]=plan[name];
  validAfterRemove();
  render();
  status.textContent = `${spent()} / ${limit} points · ${selectedPlayerRole.toUpperCase()}`;
}

// Called by LOAD and RUBBER. Clear allocated talents but preserve manually selected Innates.
window.SkillWhatResetTalents = function () {
  for (const key of Object.keys(ranks)) delete ranks[key];
  closeInnatePicker();
  const status = overlay.querySelector('#sw-best-talents-status');
  if (status) status.textContent = '';
  render();
};

function init(){document.body.appendChild(overlay);document.body.appendChild(talentTooltip);window.addEventListener('resize',drawTalentLinks);document.getElementById('sw-talent-close').addEventListener('click',close);document.getElementById('sw-best-talents').addEventListener('click',swBuildBestTalents);document.getElementById('sw-talent-reset').addEventListener('click',()=>{for(const k of Object.keys(ranks))delete ranks[k];innateSlots.fill(null);closeInnatePicker();render()});overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});const xp=document.querySelector('.experience-container');if(xp){xp.addEventListener('click',open);xp.style.cursor='pointer';}else console.warn('SkillWhat: .experience-container não encontrada');if(xpNode()){new MutationObserver(()=>{if(!overlay.classList.contains('sw-talent-hidden'))render()}).observe(xpNode(),{childList:true,characterData:true,subtree:true})}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
