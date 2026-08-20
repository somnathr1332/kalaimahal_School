import{j as e,m}from"./index-CyGlSJf3.js";function h({children:s,icon:t,title:a,description:d,className:i="",hover:n=!0,delay:o=0,glass:l=!1,color:r,onClick:x}){return e.jsxs(m.div,{className:`
        relative rounded-2xl p-6 overflow-hidden
        ${l?"glass":"bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-md"}
        ${n?"card-hover cursor-pointer":""}
        ${i}
      `,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-30px"},transition:{duration:.4,delay:o*.1},onClick:x,children:[r&&e.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 rounded-t-2xl",style:{backgroundColor:r}}),t&&e.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center mb-4",style:{backgroundColor:r?`${r}15`:"rgba(30,58,138,0.1)"},children:e.jsx(t,{size:24,style:{color:r||"#1E3A8A"}})}),a&&e.jsx("h3",{className:"text-lg font-semibold font-heading text-heading dark:text-dark-heading mb-2",children:a}),d&&e.jsx("p",{className:"text-sm text-text dark:text-dark-text leading-relaxed",children:d}),s]})}export{h as C};
