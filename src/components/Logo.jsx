import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3, // 0
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        {/* <img src={star} alt="Wibe Fashion" /> */}
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="500.000000pt" height="281.000000pt" viewBox="0 0 500.000000 281.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,281.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M948 2696 c-102 -37 -197 -125 -298 -279 -218 -330 -352 -795 -353
-1222 0 -247 31 -410 111 -575 37 -77 60 -109 121 -171 78 -78 162 -129 212
-129 34 0 39 -17 39 -147 0 -90 3 -106 20 -123 24 -24 34 -25 55 -3 21 20 14
79 -21 172 -35 92 -34 95 34 109 31 7 81 23 110 37 30 14 58 25 63 25 4 0 7
-48 6 -108 -1 -72 2 -114 11 -129 33 -59 42 4 17 122 -24 113 -22 126 30 158
67 43 177 166 266 300 186 278 283 552 295 832 9 203 -30 340 -122 425 -73 67
-161 73 -257 17 -68 -40 -138 -141 -183 -261 -21 -57 -21 -56 -54 69 -12 44
-35 107 -53 140 -27 51 -37 60 -63 63 -42 4 -78 -28 -116 -102 -74 -146 -103
-297 -118 -623 -12 -236 -4 -422 29 -688 10 -82 17 -152 14 -154 -2 -3 -29 4
-59 14 -167 56 -267 307 -281 700 -22 615 230 1303 533 1451 112 55 209 31
304 -75 65 -71 78 -65 36 17 -30 58 -88 116 -138 137 -45 18 -139 19 -190 1z
m9 -755 c30 -44 59 -138 79 -258 13 -77 14 -109 6 -162 -22 -133 -25 -271 -8
-398 11 -81 16 -197 16 -347 l0 -225 -33 -25 c-47 -36 -119 -66 -176 -73 l-49
-6 -11 69 c-38 241 -48 788 -17 1019 27 212 65 351 112 412 31 41 51 39 81 -6z
m535 -36 c42 -42 53 -103 53 -285 -1 -144 -4 -180 -29 -285 -36 -156 -66 -239
-128 -355 -85 -160 -181 -290 -276 -374 l-44 -40 4 230 c4 173 10 259 27 354
12 69 33 190 46 270 41 242 88 362 179 456 48 50 56 54 98 54 35 0 51 -6 70
-25z"/>
<path d="M4205 2640 c-69 -27 -244 -288 -360 -537 -42 -89 -65 -123 -65 -95
-2 65 -22 248 -30 263 -6 10 -21 19 -34 19 -32 0 -69 -73 -139 -275 -78 -225
-106 -324 -117 -427 -11 -94 -8 -111 17 -106 18 4 96 244 169 518 l49 185 7
-95 c14 -178 37 -236 88 -223 31 8 45 32 105 173 88 209 227 456 281 501 21
17 24 26 -45 -171 -62 -177 -99 -322 -151 -590 -75 -388 -130 -803 -133 -1015
-2 -97 1 -117 15 -132 12 -11 21 -14 27 -8 6 6 17 77 26 160 26 253 91 655
111 687 3 5 14 2 24 -7 14 -12 23 -14 37 -6 11 5 91 33 179 61 336 109 520
186 595 249 68 57 87 137 49 210 -59 117 -293 225 -516 238 l-102 6 -12 -39
c-7 -21 -39 -97 -70 -169 -32 -71 -68 -159 -81 -194 -36 -101 -33 -57 6 85
122 439 139 523 133 648 -3 75 -23 102 -63 86z m219 -465 c191 -40 400 -163
421 -248 16 -64 -47 -103 -318 -196 -97 -33 -217 -78 -268 -100 -51 -22 -94
-39 -96 -37 -4 4 26 104 101 341 24 77 47 166 51 198 8 65 5 64 109 42z"/>
<path d="M895 2546 c-55 -24 -115 -113 -115 -170 0 -38 21 -76 45 -82 96 -24
231 196 153 250 -27 19 -43 19 -83 2z"/>
<path d="M3540 2398 c-36 -60 -22 -108 31 -108 58 0 92 92 47 124 -34 24 -56
19 -78 -16z m50 -37 c0 -11 -4 -23 -10 -26 -6 -4 -10 5 -10 19 0 14 5 26 10
26 6 0 10 -9 10 -19z"/>
<path d="M2511 2360 c-67 -14 -129 -39 -206 -83 -78 -45 -192 -149 -221 -202
-16 -31 -29 -38 -114 -66 -102 -33 -170 -65 -182 -83 -11 -16 -10 -36 2 -36 6
0 10 6 10 14 0 15 67 44 176 75 84 25 84 25 84 7 0 -27 42 -66 83 -77 47 -13
176 2 236 27 19 8 36 13 38 11 1 -2 -1 -28 -6 -58 -6 -30 -13 -82 -16 -116 -6
-56 -9 -63 -28 -63 -12 0 -69 -11 -127 -25 -210 -51 -380 -162 -445 -292 -27
-52 -30 -68 -30 -153 0 -87 3 -101 32 -161 63 -127 172 -220 306 -261 130 -39
236 -9 308 86 67 88 74 132 74 456 l0 285 93 -2 c123 -4 222 -25 309 -68 182
-90 217 -243 108 -463 -33 -65 -66 -114 -110 -160 -58 -61 -65 -66 -85 -54
-17 11 -21 10 -27 -4 -10 -26 11 -49 49 -52 83 -7 259 185 324 353 13 35 19
75 19 135 0 73 -4 93 -28 142 -73 148 -258 235 -524 245 -154 6 -148 1 -137
131 8 92 27 150 54 169 11 8 20 25 20 39 0 31 -39 33 -66 3 -68 -75 -313 -134
-361 -86 -32 31 -5 48 163 99 327 101 492 213 400 273 -30 20 -116 27 -175 15z
m136 -55 c7 -20 -13 -36 -107 -84 -82 -42 -357 -144 -374 -138 -15 5 71 85
145 133 101 66 199 100 292 103 25 1 40 -4 44 -14z m-260 -932 c-7 -284 -14
-342 -50 -412 -35 -70 -65 -86 -155 -86 -68 0 -84 4 -139 34 -74 40 -150 117
-189 192 -25 47 -29 65 -29 139 0 75 3 91 27 131 34 57 101 123 165 161 77 45
253 97 362 107 12 1 13 -41 8 -266z"/>
<path d="M2981 2227 c-6 -8 -46 -88 -90 -178 -43 -90 -86 -173 -96 -184 -16
-19 -16 -17 -12 36 3 31 15 101 28 156 12 55 20 107 16 116 -8 20 -48 31 -82
23 -75 -19 -205 -226 -207 -328 0 -45 25 -88 51 -88 24 0 72 39 90 74 20 37
31 32 31 -12 0 -92 76 -102 126 -16 29 49 44 49 44 -1 0 -57 49 -85 82 -47 9
9 26 37 39 62 l23 45 8 -55 c11 -68 31 -100 63 -100 52 0 93 75 166 299 39
123 43 129 70 133 16 3 29 1 29 -3 0 -4 -19 -53 -42 -110 -66 -167 -64 -277 7
-295 30 -7 29 -2 9 -121 -11 -62 -15 -134 -13 -214 4 -105 7 -122 23 -135 28
-20 46 -1 46 49 0 68 117 622 166 785 20 67 23 87 13 98 -34 41 -76 -8 -125
-146 -60 -167 -67 -185 -71 -173 -3 7 14 74 37 149 23 75 40 145 38 157 -5 35
-32 43 -77 22 -22 -10 -58 -18 -78 -19 -37 -1 -38 -2 -44 -46 -16 -105 -119
-358 -140 -344 -14 8 -5 80 33 242 24 106 28 135 18 147 -23 28 -46 -2 -115
-152 -38 -81 -73 -152 -77 -158 -14 -17 -8 28 18 130 14 55 31 119 36 141 6
23 8 49 5 58 -8 19 -31 21 -46 3z m-279 -203 c-64 -140 -82 -174 -96 -174 -18
0 4 86 39 157 34 66 102 159 111 150 2 -2 -23 -62 -54 -133z"/>
<path d="M636 2090 c-79 -70 -87 -220 -12 -220 71 0 146 196 91 236 -27 20
-40 17 -79 -16z"/>
<path d="M513 1690 c-37 -15 -57 -67 -58 -146 0 -82 18 -114 65 -114 75 0 120
147 72 237 -17 31 -41 38 -79 23z"/>
<path d="M4406 548 c-49 -10 -50 -12 -36 -35 9 -14 2 -46 -39 -164 -54 -155
-60 -186 -37 -195 28 -11 116 54 116 85 0 10 -8 7 -28 -12 -16 -15 -31 -25
-34 -22 -3 3 21 82 53 175 32 93 55 171 51 173 -4 2 -25 0 -46 -5z"/>
<path d="M1878 515 c-21 -11 -76 -66 -124 -125 -121 -146 -164 -190 -201 -206
-18 -8 -33 -16 -33 -19 0 -3 37 -5 83 -5 82 0 82 1 58 19 -26 20 -25 23 22 84
26 34 33 37 79 37 l50 0 -7 -32 c-12 -54 -29 -83 -53 -86 -12 -2 -22 -8 -22
-13 0 -5 42 -9 93 -9 l92 0 -27 23 -27 22 30 145 c16 80 28 154 27 165 l-3 20
-37 -20z m-46 -125 l-15 -70 -44 0 c-34 0 -42 3 -36 13 16 27 98 127 104 127
3 0 -1 -31 -9 -70z"/>
<path d="M2610 521 c0 -2 8 -9 17 -16 20 -15 15 -41 -40 -212 -28 -84 -36
-100 -62 -113 l-30 -15 48 -3 c26 -2 68 -2 95 0 46 3 46 4 20 16 -33 14 -32 9
-12 80 21 72 29 82 70 82 26 0 36 -6 48 -27 l14 -27 14 49 c17 58 15 65 -10
42 -15 -14 -102 -26 -102 -14 1 20 44 133 53 139 21 13 75 9 91 -8 9 -8 16
-25 16 -37 0 -31 17 -8 25 33 l6 36 -130 0 c-72 0 -131 -2 -131 -5z"/>
<path d="M3564 521 c-36 -16 -64 -60 -64 -102 0 -31 9 -47 52 -94 73 -80 70
-135 -9 -151 -41 -8 -83 30 -83 76 0 42 -14 31 -29 -22 -13 -46 -12 -65 3 -60
5 2 31 -2 57 -9 62 -16 117 -1 153 42 45 53 32 111 -43 184 -44 42 -50 67 -25
103 34 48 114 17 114 -45 0 -38 17 -26 34 24 9 25 14 48 13 50 -9 8 -155 12
-173 4z"/>
<path d="M2328 452 c-9 -9 -21 -27 -27 -39 -7 -14 -21 -23 -36 -23 -13 0 -27
-4 -30 -10 -3 -5 1 -10 10 -10 27 0 27 -24 -4 -107 -25 -67 -28 -84 -17 -98
17 -23 47 -13 97 32 46 42 52 63 9 32 -16 -13 -33 -19 -37 -15 -4 4 4 40 18
79 23 67 27 72 57 75 38 4 43 22 6 22 -24 0 -26 2 -20 34 8 40 -5 53 -26 28z"/>
<path d="M2016 379 c-31 -25 -35 -45 -5 -29 11 7 23 10 25 7 2 -2 -10 -41 -27
-85 -54 -142 -22 -161 57 -34 28 46 60 93 72 104 l21 22 11 -28 c8 -23 13 -26
25 -16 34 29 25 80 -15 80 -17 0 -68 -50 -102 -100 -16 -24 -16 -22 0 21 26
74 -4 103 -62 58z"/>
<path d="M2911 383 c-45 -22 -83 -83 -89 -142 -4 -43 -2 -50 24 -70 74 -58
197 38 197 153 0 69 -59 95 -132 59z m69 -39 c0 -53 -19 -109 -50 -145 -36
-44 -54 -32 -47 32 13 106 97 204 97 113z"/>
<path d="M3118 384 c-16 -8 -28 -22 -28 -31 0 -12 3 -13 15 -3 31 26 31 -3 -1
-87 -29 -77 -31 -90 -18 -103 18 -18 22 -14 92 100 31 52 62 95 69 98 7 2 15
-8 19 -23 8 -31 24 -28 42 9 11 21 11 30 2 42 -27 31 -65 10 -120 -66 -18 -25
-30 -36 -25 -25 23 63 27 77 21 90 -7 19 -33 19 -68 -1z"/>
<path d="M3799 377 c-93 -62 -117 -189 -42 -218 57 -21 131 21 164 96 27 59
25 99 -7 124 -35 27 -73 27 -115 -2z m75 -49 c-3 -80 -71 -183 -96 -146 -17
27 19 144 57 181 27 27 40 15 39 -35z"/>
<path d="M4010 364 c-45 -41 -54 -63 -15 -38 14 9 28 14 31 12 2 -3 -9 -35
-26 -72 -34 -77 -36 -89 -16 -105 22 -18 63 7 115 71 43 52 49 43 15 -24 -10
-18 -11 -29 -3 -33 19 -12 74 5 102 31 35 33 28 44 -10 14 -15 -12 -29 -17
-31 -12 -1 5 11 44 28 87 17 43 29 84 26 92 -9 23 -30 14 -55 -25 -43 -65
-124 -161 -132 -156 -4 2 8 40 28 84 19 43 33 86 30 95 -10 25 -45 17 -87 -21z"/>
<path d="M4456 214 c-27 -26 -17 -59 18 -59 36 0 56 27 40 53 -15 24 -38 26
-58 6z"/>
<path d="M4596 214 c-27 -26 -17 -59 18 -59 36 0 56 27 40 53 -15 24 -38 26
-58 6z"/>
<path d="M4736 211 c-24 -26 -13 -61 18 -61 30 0 48 22 44 52 -4 30 -39 35
-62 9z"/>
</g>
</svg>

        <Text variants={textVariants} initial="hidden" animate="visible">
          Gauri's Palette
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
