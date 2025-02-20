import React from 'react';
import Svg, {Circle, Defs, G, Mask, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';

export function TablerHome(props: SvgProps) {
  //
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
      </G>
    </Svg>
  );
}

export function TablerHomeFilled(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"
      />
    </Svg>
  );
}

export function FluentChartPerson24Filled(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M12.5 2.75a.75.75 0 0 0-1.5 0V3H5.25A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19h2.398l-1.475 1.77a.75.75 0 0 0 1.153.96L9.6 19h3.508c.334-1.156 1.4-2 2.664-2h.277A3.5 3.5 0 1 1 22 14.5V6.25A3.25 3.25 0 0 0 18.75 3H12.5zm-6.5 5A.75.75 0 0 1 6.75 7h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 6 7.75M6.75 10h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m0 3h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5M21 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function FluentChartPerson24Regular(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M12.5 2.75a.75.75 0 0 0-1.5 0V3H5.25A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19h2.398l-1.475 1.77a.75.75 0 0 0 1.153.96L9.6 19h3.508a2.78 2.78 0 0 1 1.075-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v5.377A3.5 3.5 0 0 1 22 14.5V6.25A3.25 3.25 0 0 0 18.75 3H12.5zm-6.5 5A.75.75 0 0 1 6.75 7h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 6 7.75M6.75 10a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 13.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m15 .75a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

// export function SolarBellLinear(props: SvgProps) {
//   return (
//     <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
//       <G fill="none" stroke="currentColor" strokeWidth={1.5}>
//         <Path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></Path>
//         <Path
//           strokeLinecap="round"
//           d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"></Path>
//       </G>
//     </Svg>
//   );
// }

// export function SolarBellBold(props: SvgProps) {
//   return (
//     <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
//       <Path
//         fill={props.color || 'currentColor'}
//         d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"></Path>
//     </Svg>
//   );
// }

export function FluentEditPerson24Filled(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M15.891 3.048a3.578 3.578 0 1 1 5.061 5.06l-.892.893L15 3.94zM13.94 5.001L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l5.25-5.251a3.5 3.5 0 0 1 4.555-4.556l.193-.192zM20 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 20.431 20.714 22 17.5 22S13 20.437 13 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function FluentEditPerson24Regular(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M20.952 3.048a3.58 3.58 0 0 0-5.06 0L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l5.25-5.251a3.5 3.5 0 0 1-.198-1.923L7.94 19c-.21.21-.474.357-.763.426l-3.416.814l.813-3.416c.069-.29.217-.554.427-.764L15 6.06L17.94 9l-1.054 1.054a3.5 3.5 0 0 1 1.922.199l2.144-2.144a3.58 3.58 0 0 0 0-5.06m-4 1.06a2.078 2.078 0 1 1 2.94 2.94l-.892.89L16.06 5zM20 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 20.431 20.714 22 17.5 22S13 20.437 13 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function MdiPersonBadge(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M17 3h-3v3h-4V3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zM13 5h-2V1h2zm3 14H8v-1h8zm-4 2H8v-1h4z"></Path>
    </Svg>
  );
}

export function MdiPersonBadgeOutline(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M17 3h-3v2h3v16H7V5h3V3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm0 3H8v-1h8zm-4 2H8v-1h4zm1-15h-2V1h2z"></Path>
    </Svg>
  );
}

export function MaterialSymbolsArrowBackIosRounded(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"></Path>
    </Svg>
  );
}

// export function MaterialSymbolsListAltOutline(props: SvgProps) {//
//   return (
//     <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
//       <Path
//         fill="currentColor"
//         d="M8 17q.425 0 .713-.288T9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17m0-4q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></Path>
//     </Svg>
//   );
// }

export function FaListAlt(props: SvgProps) {
  //
  return (
    <Svg width={1792} height={1408} viewBox="0 0 1792 1408" {...props}>
      <Path
        fill="currentColor"
        d="M384 1056v64q0 13-9.5 22.5T352 1152h-64q-13 0-22.5-9.5T256 1120v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5m0-256v64q0 13-9.5 22.5T352 896h-64q-13 0-22.5-9.5T256 864v-64q0-13 9.5-22.5T288 768h64q13 0 22.5 9.5T384 800m0-256v64q0 13-9.5 22.5T352 640h-64q-13 0-22.5-9.5T256 608v-64q0-13 9.5-22.5T288 512h64q13 0 22.5 9.5T384 544m1152 512v64q0 13-9.5 22.5t-22.5 9.5H544q-13 0-22.5-9.5T512 1120v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5m0-256v64q0 13-9.5 22.5T1504 896H544q-13 0-22.5-9.5T512 864v-64q0-13 9.5-22.5T544 768h960q13 0 22.5 9.5t9.5 22.5m0-256v64q0 13-9.5 22.5T1504 640H544q-13 0-22.5-9.5T512 608v-64q0-13 9.5-22.5T544 512h960q13 0 22.5 9.5t9.5 22.5m128 704V416q0-13-9.5-22.5T1632 384H160q-13 0-22.5 9.5T128 416v832q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5m128-1088v1088q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V160Q0 94 47 47T160 0h1472q66 0 113 47t47 113"></Path>
    </Svg>
  );
}

export function LsiconSettingOutline(props: SvgProps) {
  //
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <G fill="none" stroke="currentColor">
        <Path d="m13.258 8.354l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125a1 1 0 0 1-.306-.046l-1.157-.382q-.304.195-.632.349l-.243 1.173a.93.93 0 0 1-.339.544a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782z"></Path>
        <Path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></Path>
      </G>
    </Svg>
  );
}

export function IconParkSolidAddWeb(props: SvgProps) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" {...props}>
      <Defs>
        <Mask id="ipSAddWeb0">
          <G fill="none">
            <Path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13.941"></Path>
            <Path
              fill="#fff"
              stroke="#fff"
              strokeWidth={4}
              d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></Path>
            <Path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M32 35h12m-6-6v12"></Path>
            <Circle
              r={2}
              fill="#000"
              transform="matrix(0 -1 -1 0 10 14)"></Circle>
            <Circle
              r={2}
              fill="#000"
              transform="matrix(0 -1 -1 0 16 14)"></Circle>
          </G>
        </Mask>
      </Defs>
      <Path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSAddWeb0)"></Path>
    </Svg>
  );
}

export function FluentBuildingHome24Regular(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M3.75 3.5a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9V18H3.75A1.75 1.75 0 0 1 2 16.25V3.75C2 2.784 2.784 2 3.75 2h5.5c.966 0 1.75.784 1.75 1.75v3c0 .138.112.25.25.25h1c.966 0 1.75.784 1.75 1.75v.072l-1.5 1.4V8.75a.25.25 0 0 0-.25-.25h-1A1.75 1.75 0 0 1 9.5 6.75v-3a.25.25 0 0 0-.25-.25zM6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M5.25 9.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 11.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.75 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m9.444-3.061a1.75 1.75 0 0 0-2.388 0l-4.25 3.966a1.75 1.75 0 0 0-.556 1.28V20.5a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5V18h2v2.5a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-5.815a1.75 1.75 0 0 0-.556-1.28zm-1.365 1.096a.25.25 0 0 1 .342 0l4.25 3.967a.25.25 0 0 1 .079.183V20.5h-2V18a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5v2.5h-2v-5.815a.25.25 0 0 1 .08-.183z"></Path>
    </Svg>
  );
}

export function SolarUserCheckLinear(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G fill="none" stroke="currentColor" strokeWidth={1.5}>
        <Circle cx={12} cy={6} r={4}></Circle>
        <Circle cx={18} cy={16} r={4}></Circle>
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.667 16l.833 1l1.833-1.889"></Path>
        <Path d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5"></Path>
      </G>
    </Svg>
  );
}

export function SolarAltArrowRightLineDuotone(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 5l6 7l-6 7"></Path>
    </Svg>
  );
}

export function IconamoonEdit(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"></Path>
    </Svg>
  );
}
