"use client";
import React from "react";
import Link from "next/link";

export const PageIcon = () => {
  return (
    <div>
      <svg
        viewBox="0 0 755 156"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-yellow-500 w-full h-full"
      >
        <path d="M515.967 2.2466C489.994 9.39659 469.565 28.5119 460.81 53.7558C458.184 61.3436 457.454 66.7425 457.454 78.1242C457.454 89.5058 458.184 94.9048 460.81 102.493C469.565 128.028 490.14 146.998 516.551 154.002C533.769 158.671 559.013 154.877 574.772 145.538C582.36 141.161 599.725 125.11 599.725 122.775C599.725 122.046 594.18 117.96 587.467 113.436L575.21 105.265L568.79 111.539C558.138 121.754 550.258 124.818 534.791 124.818C523.847 124.818 520.637 124.234 515.384 121.462C505.607 116.355 496.56 107.162 492.183 97.9691C488.827 91.1109 488.097 87.9007 488.097 78.1242C488.097 68.3476 488.827 65.1374 492.183 58.2793C496.852 48.6487 506.629 39.018 516.259 34.6405C521.658 32.1599 525.89 31.4303 535.52 31.4303C550.258 31.5762 558.138 34.6405 568.644 44.8548L575.356 51.4211L587.467 42.9578C594.18 38.4344 599.725 34.2027 599.725 33.4731C599.725 31.1384 582.214 15.0874 574.772 10.7099C559.013 1.37109 532.894 -2.42279 515.967 2.2466Z" />
        <path d="M659.989 2.24669C646.418 5.16507 634.015 12.461 622.196 24.1345C581.339 64.6998 598.119 133.136 653.422 152.105C660.864 154.586 666.409 155.461 677.061 155.461C699.533 155.461 715.73 148.603 731.927 132.26C747.54 116.501 754.398 100.158 754.398 78.1243C754.398 56.0906 747.54 39.7477 731.927 23.9885C711.79 3.85179 687.13 -3.59004 659.989 2.24669ZM696.906 35.662C706.245 40.0396 714.854 48.3569 719.523 57.8416C722.442 63.8243 723.026 67.1804 723.026 78.1243C723.026 89.0682 722.442 92.4243 719.523 98.4069C705.223 127.299 667.139 133.865 644.23 111.54C634.453 101.909 631.097 93.5916 631.097 78.1243C631.097 62.6569 634.015 55.361 643.938 45.4385C658.238 30.8467 678.375 27.1987 696.906 35.662Z" />
        <path d="M0 78.1241V154.731H30.7888C74.5643 154.731 85.3623 151.375 104.478 132.26C120.091 116.501 126.949 100.158 126.949 78.1241C126.949 55.9445 120.529 40.3312 105.061 24.8639C85.9459 5.7486 72.5214 1.51695 29.6214 1.51695H0V78.1241ZM70.7704 36.8292C85.9459 44.8547 94.8469 58.4251 96.0143 75.4976C97.0357 90.5272 93.6796 98.9904 82.4439 110.226C71.2082 121.608 64.2041 124.088 44.9429 124.088H30.6429V77.9782V31.868L47.1316 32.4517C61.2857 32.8894 64.4959 33.4731 70.7704 36.8292Z" />
        <path d="M141.541 53.3181C141.541 101.909 141.687 105.849 144.605 114.166C156.717 150.208 195.385 165.967 230.113 148.895C239.89 144.079 250.542 133.427 255.649 123.505C262.07 110.956 262.653 105.557 262.653 52.1507V1.51704H247.332H232.01V51.4211C232.01 107.6 231.719 108.621 221.358 117.814C209.977 127.736 194.218 127.736 182.836 117.814C172.476 108.621 172.184 107.6 172.184 51.4211V1.51704H156.862H141.541V53.3181Z" />
        <path d="M281.623 77.9782V154.731H296.944H312.265V92.7159V30.7006L328.025 30.8465C336.634 30.8465 345.973 31.5761 348.745 32.5976C355.603 34.9323 360.418 42.52 360.418 50.6914C360.418 63.6782 353.123 70.5363 337.509 72.2874L328.316 73.3088V87.9006V102.492L346.264 128.612L364.066 154.585L382.744 154.731H401.422L396.752 147.727C394.126 143.933 385.225 131.092 376.761 119.273C368.444 107.308 361.878 97.3853 362.169 97.2394C362.315 97.0935 365.672 95.1966 369.319 93.0078C386.392 83.2312 394.417 64.4078 390.915 42.6659C388.143 25.1557 377.929 11.4394 363.337 5.60266C355.895 2.53838 352.393 2.24654 318.54 1.80878L281.623 1.22511V77.9782Z" />
        <path d="M424.331 6.47818L410.031 11.0016V82.7935V154.731H425.352H440.673V78.1241C440.673 35.9537 440.236 1.66287 439.652 1.66287C438.922 1.80879 432.064 3.85165 424.331 6.47818Z" />
      </svg>
    </div>
  );
};

export const IconSvg = () => {
  return (
    <div>
      <Link href={"/farm"}>
        <svg
          width="107"
          height="22"
          viewBox="0 0 107 22"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-black"
        >
          <path d="M72.8806 0.282255C69.2119 1.2922 66.3263 3.99224 65.0897 7.55796C64.7187 8.62973 64.6156 9.39234 64.6156 11C64.6156 12.6077 64.7187 13.3703 65.0897 14.442C66.3263 18.049 69.2325 20.7284 72.9631 21.7177C75.3952 22.3773 78.9609 21.8414 81.1869 20.5223C82.2587 19.904 84.7114 17.6368 84.7114 17.307C84.7114 17.2039 83.9282 16.6268 82.98 15.9879L81.2487 14.8337L80.3418 15.7199C78.8372 17.1627 77.7242 17.5955 75.5395 17.5955C73.9936 17.5955 73.5402 17.5131 72.7982 17.1215C71.4172 16.4001 70.1394 15.1016 69.521 13.8031C69.047 12.8344 68.9439 12.3809 68.9439 11C68.9439 9.61906 69.047 9.16562 69.521 8.1969C70.1806 6.83657 71.5615 5.47624 72.9219 4.85791C73.6845 4.50752 74.2822 4.40446 75.6425 4.40446C77.7242 4.42508 78.8372 4.85791 80.3212 6.30068L81.2693 7.22818L82.98 6.03274C83.9282 5.3938 84.7114 4.79608 84.7114 4.69302C84.7114 4.36324 82.238 2.09603 81.1869 1.4777C78.9609 0.15859 75.2715 -0.377298 72.8806 0.282255Z" />
          <path d="M93.2238 0.282259C91.3069 0.694479 89.555 1.72503 87.8855 3.37392C82.1144 9.10379 84.4847 18.7704 92.2963 21.4498C93.3474 21.8002 94.1306 21.9239 95.6353 21.9239C98.8094 21.9239 101.097 20.9551 103.385 18.6467C105.59 16.4207 106.559 14.1123 106.559 11C106.559 7.88774 105.59 5.5793 103.385 3.3533C100.541 0.50898 97.0574 -0.542183 93.2238 0.282259ZM98.4384 5.00219C99.7575 5.62052 100.974 6.79535 101.633 8.13507C102.045 8.98012 102.128 9.45417 102.128 11C102.128 12.5458 102.045 13.0199 101.633 13.8649C99.6132 17.9459 94.2337 18.8734 90.9978 15.7199C89.6168 14.3596 89.1428 13.1848 89.1428 11C89.1428 8.81523 89.555 7.78468 90.9565 6.38313C92.9764 4.32202 95.8208 3.80675 98.4384 5.00219Z" />
          <path d="M0 11V21.8208H4.34893C10.5322 21.8208 12.0575 21.3467 14.7575 18.6467C16.9629 16.4207 17.9316 14.1123 17.9316 11C17.9316 7.86712 17.0247 5.66174 14.84 3.47697C12.1399 0.776922 10.2437 0.179203 4.18404 0.179203H0V11ZM9.99636 5.16708C12.1399 6.30068 13.3972 8.21751 13.5621 10.629C13.7063 12.7519 13.2323 13.9474 11.6452 15.5344C10.0582 17.1421 9.06886 17.4925 6.3482 17.4925H4.32832V10.9794V4.4663L6.65737 4.54874C8.65664 4.61058 9.11008 4.69302 9.99636 5.16708Z" />
          <path d="M19.9927 7.49613C19.9927 14.3596 20.0133 14.9161 20.4255 16.0909C22.1362 21.1819 27.5982 23.4079 32.5036 20.9964C33.8845 20.3162 35.3891 18.8116 36.1105 17.41C37.0174 15.6375 37.0998 14.8749 37.0998 7.33124V0.179207H34.9357H32.7715V7.22818C32.7715 15.1634 32.7303 15.3077 31.2669 16.6062C29.6593 18.0078 27.4333 18.0078 25.8256 16.6062C24.3622 15.3077 24.321 15.1634 24.321 7.22818V0.179207H22.1568H19.9927V7.49613Z" />
          <path d="M39.7793 10.9794V21.8208H41.9435H44.1076V13.0611V4.30141L46.3336 4.32202C47.5497 4.32202 48.8688 4.42508 49.2604 4.56936C50.2291 4.89913 50.9093 5.97091 50.9093 7.12512C50.9093 8.95951 49.8787 9.92823 47.6733 10.1756L46.3748 10.3198V12.3809V14.442L48.91 18.1314L51.4245 21.8002L54.0628 21.8208H56.701L56.0414 20.8315C55.6704 20.2956 54.4131 18.4818 53.2177 16.8123C52.0429 15.1222 51.1154 13.7207 51.1566 13.7C51.1772 13.6794 51.6513 13.4115 52.1665 13.1023C54.578 11.7214 55.7116 9.06256 55.217 5.99152C54.8254 3.51819 53.3826 1.58075 51.3215 0.756311C50.2703 0.323481 49.7757 0.282257 44.9939 0.220425L39.7793 0.137981V10.9794Z" />
          <path d="M59.937 0.879976L57.9171 1.51892V11.6596V21.8208H60.0813H62.2454V11C62.2454 5.04341 62.1836 0.199812 62.1012 0.199812C61.9981 0.220423 61.0294 0.508978 59.937 0.879976Z" />
        </svg>
      </Link>
    </div>
  );
};

export const SignupSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
};

export const DeleteSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth="2"
      className="w-6 h-6 stroke-error"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
};

export const UpdateSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth="2"
      className="w-6 h-6 stroke-success"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
};

export const InfoSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};

export const AlertDeleteSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-12 h-12 stroke-secondary mb-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const AddSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const AddCircleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const SearchSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export const EyeSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

export const EyeCloseSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};

export const EditSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
};

export const TreeIconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="30"
      fill="#B46A07"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="M440.781,203.438c1.188-6.375,1.781-12.781,1.781-19.125c0-45.875-29.094-85.984-71.813-100.625   C354.859,33.969,308.953,0,256,0s-98.875,33.969-114.75,83.688c-42.734,14.625-71.813,54.75-71.813,100.625   c0,6.344,0.594,12.75,1.766,19.125c-24.813,22.813-38.844,54.547-38.844,88.531c0,66.516,54.109,120.625,120.625,120.625   c13.219,0,26.125-2.125,38.531-6.313c14.422,10.219,31.078,16.828,48.484,19.359V512h8h16h8v-86.359   c17.406-2.531,34.063-9.141,48.484-19.359c12.391,4.188,25.313,6.313,38.531,6.313c66.516,0,120.625-54.109,120.625-120.625   C479.641,257.984,465.594,226.25,440.781,203.438z M359.016,380.594c-12.094,0-23.828-2.406-34.922-7.156L315,369.531l-7.563,6.406   c-12.313,10.438-27.516,16.844-43.438,18.469v-41.875l62.547-71.469L314.5,270.531L264,328.25v-58.938l50.438-57.656   l-12.047-10.531L264,245v-90.344h-16v90.359l-38.406-43.891l-12.047,10.531L248,269.313v58.938l-50.5-57.719l-12.047,10.531   L248,352.531v41.875c-15.938-1.625-31.125-8.031-43.453-18.469L197,369.531l-9.109,3.906c-11.078,4.75-22.828,7.156-34.906,7.156   c-48.875,0-88.625-39.75-88.625-88.625c0-27.516,12.563-53.031,34.453-70l8.563-6.656l-2.984-10.406   c-1.969-6.844-2.953-13.781-2.953-20.594c0-34.344,23.297-64.063,56.656-72.266l9.5-2.344l2.25-9.516   C179.344,60.031,214.766,32,256,32s76.656,28.031,86.141,68.188l2.25,9.516l9.5,2.344c33.359,8.203,56.672,37.922,56.672,72.266   c0,6.813-1,13.75-2.969,20.594l-2.984,10.406l8.563,6.656c21.906,16.969,34.469,42.484,34.469,70   C447.641,340.844,407.875,380.594,359.016,380.594z" />
      </g>
    </svg>
  );
};

export const CartSvg = () => {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3434 0.134613C19.8784 0.696184 16.8555 2.72739 15.0633 5.71447C14.5734 6.52695 13.9162 8.03243 13.7967 8.6418C13.7489 8.84492 13.5219 9.19142 13.2949 9.41844C12.7094 9.98001 11.7177 11.2107 11.0128 12.2382L10.4154 13.0985L10.1525 12.071C9.62679 9.96806 8.56339 8.15192 6.91452 6.5389C5.73164 5.37991 4.44123 4.54353 2.876 3.95807C1.68117 3.50403 0.928429 3.44429 0.593877 3.77884C0.0323073 4.34041 -0.182762 6.94514 0.175687 8.80907C0.928429 12.8237 4.19031 17.4118 7.21323 18.7023C7.54778 18.8456 7.7987 19.001 7.78675 19.0607C7.44025 20.5901 7.24908 21.8686 7.12959 23.2785C6.99816 24.8915 7.01011 25.0588 7.20128 25.3455C7.60752 25.9788 8.50365 25.9907 8.80235 25.3814C8.8621 25.238 8.98158 24.3419 9.05327 23.386C9.39977 18.8934 11.0247 14.9624 13.964 11.4974L14.7407 10.5774L15.3381 10.685C15.6726 10.7327 16.7719 10.7805 17.7875 10.7805C20.0218 10.7805 21.0255 10.5535 22.8655 9.6574C25.7331 8.24751 28.0152 5.57109 28.8994 2.58401C29.222 1.53256 29.1861 0.959045 28.7799 0.672287C28.063 0.146563 25.064 -0.152145 23.3434 0.134613ZM26.1393 1.9627C26.6173 2.0105 26.916 2.09413 26.9518 2.20167C27.0593 2.47648 25.984 4.49574 25.279 5.35602C24.0962 6.77786 22.4473 7.88906 20.5953 8.52232C19.8187 8.78518 19.3646 8.85687 18.1459 8.89271L16.6524 8.94051L16.9511 8.68959C18.0981 7.73373 20.3803 6.47916 22.2442 5.76226C22.9133 5.4994 23.4868 5.21264 23.5824 5.06926C23.9647 4.51964 23.678 3.77884 23.0089 3.61157C22.3995 3.45624 19.5558 4.71081 17.1901 6.1685C16.9033 6.34773 16.8913 6.34773 17.0706 6.12071C19.2571 3.15753 22.6624 1.59231 26.1393 1.9627ZM2.93574 6.04902C4.6324 6.8615 6.31711 8.37893 7.24908 9.95611C7.82259 10.9239 8.42001 12.6325 8.52754 13.6481L8.61118 14.365L7.96597 13.2538C7.20128 11.9276 6.0423 10.2787 5.31345 9.49013C4.71604 8.84492 4.2859 8.76128 3.76017 9.17947C3.23445 9.58571 3.33004 10.0636 4.13057 11.0315C5.3493 12.513 6.63971 14.6279 7.30882 16.2409L7.49999 16.6949L7.12959 16.5038C6.48439 16.1692 4.96695 14.5443 4.14252 13.2897C2.68483 11.0912 2.02767 9.25116 1.93209 7.10047C1.84845 5.48745 1.8126 5.52329 2.93574 6.04902Z"
        fill="#B46A07"
      />
      <path
        d="M32.5435 0.039011C29.7476 0.433304 29.4131 0.720062 29.8551 2.30919C30.3928 4.2926 31.5279 6.18043 33.0095 7.59033C34.4672 8.97633 35.9488 9.82466 37.9202 10.434C38.9359 10.7566 39.1151 10.7686 41.1463 10.7566C42.3292 10.7447 43.4762 10.7208 43.7032 10.6969C44.0856 10.661 44.1812 10.7327 44.9458 11.6169C47.8254 14.9385 49.5459 19.228 49.7969 23.7205C49.8685 25.1185 49.9163 25.3335 50.1434 25.5606C50.5137 25.931 51.1948 25.919 51.5174 25.5367C51.7325 25.2619 51.7444 25.1185 51.6847 23.5652C51.6369 22.4779 51.5055 21.3906 51.3143 20.4586C50.9558 18.7739 50.9678 18.8456 51.159 18.8456C51.3979 18.8456 53.2021 17.9495 53.8473 17.5074C56.1294 15.978 57.8022 13.6362 58.6027 10.9C59.0568 9.34673 59.1285 7.06461 58.782 5.40379C58.6505 4.75858 58.4355 4.07753 58.316 3.91026C58.0053 3.50401 57.4079 3.46817 56.4043 3.80272C52.5808 5.05729 49.6654 8.1758 48.6857 12.047L48.4228 13.0985L47.682 12.059C47.2758 11.4855 46.535 10.5296 46.0092 9.94415C45.364 9.20335 45.0295 8.70152 44.9219 8.33113C44.4082 6.55083 43.4045 4.87807 41.9946 3.48012C40.3696 1.85515 38.7208 0.923183 36.5581 0.373562C35.4469 0.0868034 33.3918 -0.0804729 32.5435 0.039011ZM35.2916 2.05827C37.4782 2.44062 39.3301 3.44427 40.8954 5.11703C41.3972 5.64276 41.8034 6.13264 41.8034 6.19238C41.8034 6.25212 41.5047 6.10874 41.1463 5.88173C40.1426 5.23652 37.9561 4.19702 36.8449 3.83857C35.889 3.51596 35.8412 3.51596 35.5306 3.71908C35.0766 4.01779 34.9332 4.47183 35.1602 4.93781C35.2916 5.23652 35.4708 5.36795 35.9727 5.52328C37.6335 6.0729 39.8798 7.23188 41.3853 8.31918L42.2097 8.92854H41.0149C39.5572 8.92854 38.3265 8.64178 36.9405 7.98462C34.7181 6.92123 32.9617 5.06924 32.0656 2.87076C31.9103 2.48841 31.8027 2.15386 31.8386 2.12996C31.9222 2.04632 32.9259 1.91489 33.6308 1.891C33.9654 1.891 34.7181 1.96268 35.2916 2.05827ZM57.0256 6.25212C57.1451 7.19604 57.1092 8.74932 56.93 9.60959C56.4998 11.6169 55.3887 13.6481 54.0026 14.9385C53.2499 15.6315 51.5174 16.7786 51.3979 16.6591C51.2904 16.5516 52.5689 14.0185 53.238 12.991C53.5606 12.5011 54.0982 11.7722 54.4208 11.3779C55.3409 10.2787 55.4603 10.0636 55.3648 9.64544C55.2094 8.91659 54.3969 8.70152 53.7637 9.23919C53.2499 9.66933 51.8759 11.5333 51.0873 12.8715C50.7169 13.4928 50.3704 14.0902 50.3106 14.1858C50.1314 14.4845 50.3823 12.8715 50.6571 12.0351C51.4696 9.47816 53.3335 7.31552 55.7113 6.13264C56.8463 5.57107 56.93 5.58302 57.0256 6.25212Z"
        fill="#B46A07"
      />
      <path
        d="M40.3462 12.3697C39.8563 12.6923 38.8287 13.9229 38.303 14.7952C37.7892 15.6674 37.3232 17.0295 37.2038 18.0331C37.156 18.4155 37.0723 18.7262 37.0245 18.7262C36.9767 18.7262 36.5346 18.5589 36.0567 18.3558C33.3206 17.1848 31.7912 17.0534 30.2976 17.8659C29.1745 18.4752 28.2306 19.8851 27.7407 21.7132C27.5137 22.5854 27.442 25.5845 27.6332 26.9466L27.7288 27.7113L27.3942 27.6635C27.0597 27.6276 27.0477 27.6037 26.9641 26.7315C26.8685 25.6084 26.7132 25.238 25.7453 23.9356L24.9687 22.8722L25.2077 22.5496C25.4347 22.2509 25.4466 22.0836 25.4108 20.4109C25.3749 18.6545 25.363 18.5708 25.0882 18.3558C24.8253 18.1407 24.5266 18.1287 18.4569 18.1287H12.0884L11.8017 18.4394C11.5269 18.7262 11.5149 18.8337 11.4791 20.4109C11.4432 21.9283 11.4552 22.1195 11.6822 22.5018L11.9331 22.92L11.2043 23.8759C10.2842 25.0946 10.0214 25.704 9.93775 26.8032L9.86606 27.6874H9.34033C8.64733 27.6874 8.12161 27.9144 7.66757 28.4401C7.106 29.0853 6.99847 29.5752 7.04626 31.4152C7.09406 33.0044 7.106 33.0522 7.4525 33.554C7.65563 33.8288 8.04992 34.1872 8.34863 34.3426L8.8863 34.6293L10.8219 44.3194C12.5903 53.1253 12.8053 54.0811 13.1996 54.8936C14.0241 56.6142 15.7446 57.9285 17.6922 58.3228C19.0304 58.5976 39.8563 58.6096 41.1467 58.3347C43.381 57.8568 45.3286 56.1243 45.9738 54.0334C46.1052 53.6271 47.0491 49.0748 48.0886 43.9012C49.8928 34.8563 49.9765 34.5098 50.2393 34.4501C50.6456 34.3426 51.3744 33.6735 51.5537 33.2194C51.8046 32.622 51.7807 29.4677 51.5298 28.9658C51.0518 28.0339 50.4186 27.6874 49.1998 27.6874H48.3515L48.4232 27.2931C48.5905 26.4686 48.6383 23.5174 48.5068 22.7169C48.2918 21.4384 47.8019 20.1002 47.2523 19.2877C45.8304 17.1609 43.7395 16.8622 40.1908 18.296C39.6054 18.535 39.1035 18.7262 39.0796 18.7262C38.984 18.7262 39.1752 17.7105 39.4261 16.9698C39.7129 16.0975 40.3581 15.07 41.1945 14.138C41.9831 13.2777 42.0189 12.6923 41.314 12.3338C40.8838 12.1068 40.7404 12.1068 40.3462 12.3697ZM33.2608 19.3833C33.6551 19.4669 34.4915 19.7657 35.1128 20.0166C37.6936 21.0919 38.1955 21.1158 40.37 20.2794C42.8672 19.3116 43.8709 19.1324 44.7073 19.4908C45.4959 19.8134 46.2008 21.0083 46.5234 22.5735C46.7385 23.5652 46.7504 25.7756 46.5473 26.851L46.4039 27.6276L38.076 27.6635L29.76 27.6874L29.6166 27.1258C29.3776 26.1221 29.3298 23.4338 29.5329 22.466C29.9631 20.4706 30.9787 19.2638 32.305 19.216C32.4364 19.216 32.8665 19.2877 33.2608 19.3833ZM23.4991 20.5423L23.4632 21.0561H18.4449H13.4267L13.3908 20.5423L13.355 20.0405H18.4449H23.5349L23.4991 20.5423ZM23.6544 24.306C24.897 25.919 25.0762 26.2536 25.0762 27.0541V27.6874L18.4808 27.6635L11.8734 27.6276L11.8375 27.1258C11.7897 26.4209 12.0168 25.9549 13.2116 24.4016L14.263 23.0275H18.4569H22.6507L23.6544 24.306ZM49.7495 31.1524V32.6459L29.5091 32.6818C14.6454 32.6937 9.2328 32.6698 9.11332 32.5742C8.99383 32.4786 8.94604 32.0963 8.94604 31.2121C8.94604 30.5311 8.98189 29.8978 9.01773 29.7903C9.08942 29.611 10.9653 29.5991 29.4254 29.623L49.7495 29.6588V31.1524ZM15.4579 34.9997C15.4937 35.2148 15.6251 36.1348 15.7446 37.0429L15.9597 38.6798L13.797 38.6559L11.6464 38.6201L11.2521 36.7083C11.0489 35.6569 10.8697 34.7608 10.8578 34.701C10.8578 34.6532 11.8734 34.6174 13.1279 34.6174H15.3862L15.4579 34.9997ZM22.0175 35.9556C22.0653 36.6964 22.125 37.6164 22.1728 37.9868L22.2445 38.6798H20.0699C17.9312 38.6798 17.9073 38.6798 17.8595 38.405C17.8236 38.2616 17.7161 37.473 17.6086 36.6486C17.513 35.8242 17.3935 35.0356 17.3696 34.8802L17.3098 34.6174H19.6278H21.9338L22.0175 35.9556ZM28.4218 36.6486V38.6798H26.283H24.1562L24.0845 37.8673C24.0367 37.4252 23.977 36.5172 23.9292 35.8361L23.8456 34.6174H26.1396H28.4218V36.6486ZM34.9455 35.1192C34.9097 35.406 34.8499 36.314 34.8021 37.1504L34.7185 38.6798H32.532H30.3335V36.6486V34.6174H32.6754H35.0172L34.9455 35.1192ZM41.4454 34.7608C41.4454 34.8324 41.3259 35.7525 41.1945 36.792L40.9316 38.6798H38.7809H36.6302L36.7139 37.1504C36.7617 36.314 36.8214 35.406 36.8573 35.1192L36.9289 34.6174H39.1872C40.8241 34.6174 41.4454 34.6532 41.4454 34.7608ZM47.7063 36.0153C47.551 36.792 47.3598 37.712 47.2881 38.0465L47.1686 38.6798H45.006H42.8433L42.915 38.2855C42.9389 38.0824 43.0704 37.1624 43.1898 36.2543L43.393 34.6174H45.687H47.9811L47.7063 36.0153ZM16.2345 40.6991C16.2345 40.7469 16.342 41.5952 16.4735 42.563C16.6049 43.5308 16.7124 44.403 16.7124 44.4986C16.7124 44.63 16.3659 44.6539 14.7768 44.63L12.8412 44.5942L12.4469 42.6825C12.2438 41.631 12.0645 40.7349 12.0526 40.6752C12.0526 40.6274 12.9965 40.5915 14.1435 40.5915C15.2906 40.5915 16.2345 40.6393 16.2345 40.6991ZM22.364 41.2726C22.4118 41.6549 22.4715 42.5749 22.5193 43.3038L22.6029 44.6539H20.6315H18.672L18.4569 43.0051C18.3493 42.109 18.2299 41.1889 18.1821 40.9739L18.1223 40.5915H20.2133H22.2923L22.364 41.2726ZM28.4218 42.6227V44.6539H26.4622H24.5147L24.431 43.244C24.3832 42.4794 24.3235 41.5593 24.2876 41.2128L24.216 40.5915H26.3189H28.4218V42.6227ZM34.4676 42.2284C34.4198 43.1365 34.3481 44.0565 34.3123 44.2597L34.2525 44.6539H32.293H30.3335V42.6227V40.5915H32.4364H34.5512L34.4676 42.2284ZM40.4059 42.5869C40.2625 43.6981 40.1311 44.6062 40.1311 44.6181C40.1311 44.642 39.235 44.6539 38.1477 44.6539H36.1643L36.224 44.2597C36.2598 44.0565 36.3315 43.1365 36.3793 42.2284L36.463 40.5915H38.5659H40.6807L40.4059 42.5869ZM46.5115 41.9895C46.3561 42.7661 46.165 43.6861 46.0933 44.0207L45.9738 44.6539H44.0023H42.0428L42.0906 44.3791C42.1264 44.2358 42.234 43.4472 42.3415 42.6227C42.4371 41.7983 42.5566 41.0097 42.5805 40.8544C42.6402 40.5915 42.6641 40.5915 44.7192 40.5915H46.7863L46.5115 41.9895ZM17.2382 48.2623C17.3576 49.2062 17.4771 50.1143 17.513 50.3055L17.5847 50.64L15.8044 50.6042L14.0241 50.5684L13.6417 48.7164C13.4267 47.7008 13.2594 46.7927 13.2474 46.7091C13.2474 46.6015 13.7015 46.5657 15.1353 46.5657H17.0231L17.2382 48.2623ZM22.6985 46.5896C22.7463 46.6971 22.9733 50.5325 22.9375 50.5803C22.8419 50.6759 19.4605 50.6281 19.4605 50.5325C19.4605 50.4728 19.353 49.6603 19.2216 48.7164C19.0901 47.7725 18.9826 46.9002 18.9826 46.7807C18.9826 46.5776 19.126 46.5657 20.8346 46.5657C21.8502 46.5657 22.6985 46.5776 22.6985 46.5896ZM28.4218 48.5969V50.6281H26.6893C25.7334 50.6281 24.9568 50.6161 24.9448 50.5922C24.9448 50.5803 24.8731 49.6722 24.8014 48.561L24.658 46.5657H26.5339H28.4218V48.5969ZM34.1091 47.6649C34.0614 48.2743 34.0016 49.1943 33.9538 49.6961L33.8821 50.6281H32.1138H30.3335V48.5969V46.5657H32.2572H34.1928L34.1091 47.6649ZM39.8204 47.0675C39.7846 47.3543 39.6651 48.2504 39.5456 49.0748L39.3544 50.5684L37.5742 50.6042L35.7939 50.64L35.8655 49.7081C35.9133 49.1943 35.9731 48.2743 36.0209 47.6649L36.1045 46.5657H37.9923H39.8921L39.8204 47.0675ZM45.3166 47.9636C45.1613 48.7403 44.9701 49.6603 44.8985 49.9948L44.779 50.6281H43.0465C41.4454 50.6281 41.3259 50.6161 41.3259 50.4011C41.3259 50.2816 41.4334 49.3855 41.5649 48.4177C41.6963 47.4498 41.8038 46.6374 41.8038 46.6135C41.8038 46.5896 42.6522 46.5657 43.7036 46.5657H45.5915L45.3166 47.9636ZM17.8475 52.9222C17.979 53.7346 18.2657 55.9451 18.2657 56.2199C18.2657 56.4828 18.2299 56.5067 17.9192 56.4469C16.3779 56.1363 14.8246 54.5352 14.502 52.9222L14.4184 52.5398H16.1031H17.7758L17.8475 52.9222ZM23.2123 53.878C23.2601 54.6188 23.3198 55.5388 23.3676 55.9092L23.4393 56.6022H21.8621C20.3447 56.6022 20.2969 56.5903 20.2491 56.3274C20.2133 56.184 20.1057 55.3955 19.9982 54.571C19.9026 53.7466 19.7831 52.958 19.7592 52.8027L19.6995 52.5398H21.4201H23.1287L23.2123 53.878ZM28.4218 54.571V56.6022H26.8804H25.351L25.2794 55.7898C25.2316 55.3477 25.1718 54.4396 25.124 53.7585L25.0404 52.5398H26.737H28.4218V54.571ZM33.7268 53.4001C33.691 53.878 33.6193 54.7861 33.5834 55.4074L33.4998 56.5425L31.9226 56.5783L30.3335 56.6142V54.571V52.5398H32.066H33.7985L33.7268 53.4001ZM39.0557 52.6832C39.0557 52.7549 38.9363 53.6749 38.8048 54.7144L38.542 56.6022H36.9887H35.4354L35.519 55.0729C35.5668 54.2365 35.6266 53.3284 35.6624 53.0416L35.7341 52.5398H37.3949C38.5778 52.5398 39.0557 52.5757 39.0557 52.6832ZM44.301 53.0297C43.9306 54.6666 42.461 56.1124 40.848 56.435C40.4656 56.5186 40.4537 56.5067 40.5134 56.1721C40.5612 55.9809 40.6807 55.0848 40.8002 54.1767L41.0033 52.5398H42.7119H44.4086L44.301 53.0297Z"
        fill="#B46A07"
      />
    </svg>
  );
};

export const ExcelSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="18"
      height="18"
      viewBox="0 0 50 50"
      className="fill-primary"
    >
      <path d="M 28.875 0 C 28.855469 0.0078125 28.832031 0.0195313 28.8125 0.03125 L 0.8125 5.34375 C 0.335938 5.433594 -0.0078125 5.855469 0 6.34375 L 0 43.65625 C -0.0078125 44.144531 0.335938 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 29.101563 50.023438 29.402344 49.949219 29.632813 49.761719 C 29.859375 49.574219 29.996094 49.296875 30 49 L 30 44 L 47 44 C 48.09375 44 49 43.09375 49 42 L 49 8 C 49 6.90625 48.09375 6 47 6 L 30 6 L 30 1 C 30.003906 0.710938 29.878906 0.4375 29.664063 0.246094 C 29.449219 0.0546875 29.160156 -0.0351563 28.875 0 Z M 28 2.1875 L 28 6.53125 C 27.867188 6.808594 27.867188 7.128906 28 7.40625 L 28 42.8125 C 27.972656 42.945313 27.972656 43.085938 28 43.21875 L 28 47.8125 L 2 42.84375 L 2 7.15625 Z M 30 8 L 47 8 L 47 42 L 30 42 L 30 37 L 34 37 L 34 35 L 30 35 L 30 29 L 34 29 L 34 27 L 30 27 L 30 22 L 34 22 L 34 20 L 30 20 L 30 15 L 34 15 L 34 13 L 30 13 Z M 36 13 L 36 15 L 44 15 L 44 13 Z M 6.6875 15.6875 L 12.15625 25.03125 L 6.1875 34.375 L 11.1875 34.375 L 14.4375 28.34375 C 14.664063 27.761719 14.8125 27.316406 14.875 27.03125 L 14.90625 27.03125 C 15.035156 27.640625 15.160156 28.054688 15.28125 28.28125 L 18.53125 34.375 L 23.5 34.375 L 17.75 24.9375 L 23.34375 15.6875 L 18.65625 15.6875 L 15.6875 21.21875 C 15.402344 21.941406 15.199219 22.511719 15.09375 22.875 L 15.0625 22.875 C 14.898438 22.265625 14.710938 21.722656 14.5 21.28125 L 11.8125 15.6875 Z M 36 20 L 36 22 L 44 22 L 44 20 Z M 36 27 L 36 29 L 44 29 L 44 27 Z M 36 35 L 36 37 L 44 37 L 44 35 Z"></path>
    </svg>
  );
};

export const TreeSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 512 512"
      className="fill-success opacity-50 hover:opacity-100"
    >
      <g>
        <path d="M440.781,203.438c1.188-6.375,1.781-12.781,1.781-19.125c0-45.875-29.094-85.984-71.813-100.625   C354.859,33.969,308.953,0,256,0s-98.875,33.969-114.75,83.688c-42.734,14.625-71.813,54.75-71.813,100.625   c0,6.344,0.594,12.75,1.766,19.125c-24.813,22.813-38.844,54.547-38.844,88.531c0,66.516,54.109,120.625,120.625,120.625   c13.219,0,26.125-2.125,38.531-6.313c14.422,10.219,31.078,16.828,48.484,19.359V512h8h16h8v-86.359   c17.406-2.531,34.063-9.141,48.484-19.359c12.391,4.188,25.313,6.313,38.531,6.313c66.516,0,120.625-54.109,120.625-120.625   C479.641,257.984,465.594,226.25,440.781,203.438z M359.016,380.594c-12.094,0-23.828-2.406-34.922-7.156L315,369.531l-7.563,6.406   c-12.313,10.438-27.516,16.844-43.438,18.469v-41.875l62.547-71.469L314.5,270.531L264,328.25v-58.938l50.438-57.656   l-12.047-10.531L264,245v-90.344h-16v90.359l-38.406-43.891l-12.047,10.531L248,269.313v58.938l-50.5-57.719l-12.047,10.531   L248,352.531v41.875c-15.938-1.625-31.125-8.031-43.453-18.469L197,369.531l-9.109,3.906c-11.078,4.75-22.828,7.156-34.906,7.156   c-48.875,0-88.625-39.75-88.625-88.625c0-27.516,12.563-53.031,34.453-70l8.563-6.656l-2.984-10.406   c-1.969-6.844-2.953-13.781-2.953-20.594c0-34.344,23.297-64.063,56.656-72.266l9.5-2.344l2.25-9.516   C179.344,60.031,214.766,32,256,32s76.656,28.031,86.141,68.188l2.25,9.516l9.5,2.344c33.359,8.203,56.672,37.922,56.672,72.266   c0,6.813-1,13.75-2.969,20.594l-2.984,10.406l8.563,6.656c21.906,16.969,34.469,42.484,34.469,70   C447.641,340.844,407.875,380.594,359.016,380.594z" />
      </g>
    </svg>
  );
};
