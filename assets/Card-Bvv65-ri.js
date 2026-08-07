import{c,j as e,m as h}from"./index-DW24w1Rr.js";/**
 * @license lucide-react v0.311.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=c("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);function g({children:s,icon:r,title:t,description:d,className:i="",hover:n=!0,delay:o=0,glass:l=!1,color:a,onClick:x}){return e.jsxs(h.div,{className:`
        relative rounded-2xl p-6 overflow-hidden
        ${l?"glass":"bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-md"}
        ${n?"card-hover cursor-pointer":""}
        ${i}
      `,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-30px"},transition:{duration:.4,delay:o*.1},onClick:x,children:[a&&e.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 rounded-t-2xl",style:{backgroundColor:a}}),r&&e.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center mb-4",style:{backgroundColor:a?`${a}15`:"rgba(30,58,138,0.1)"},children:e.jsx(r,{size:24,style:{color:a||"#1E3A8A"}})}),t&&e.jsx("h3",{className:"text-lg font-semibold font-heading text-heading dark:text-dark-heading mb-2",children:t}),d&&e.jsx("p",{className:"text-sm text-text dark:text-dark-text leading-relaxed",children:d}),s]})}export{g as C,u as G};
