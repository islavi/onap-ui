export const template = `
<div class="search-bar-container" [ngClass]="{'not-empty': searchQuery}">
    <sdc-input class="sdc-input-wrapper"
               [label]="label"
               [placeHolder]="placeholder"
               [debounceTime]="debounceTime"
               [(value)]="searchQuery"></sdc-input>
    <span class="magnify-button search-button" (click)="searchButtonClick()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <path id="search-a" d="M2,8.5 C2,4.9 4.9,2 8.5,2 C12.1,2 15,4.9 15,8.5 C15,10.3 14.3,11.9 13.1,13.1 C11.9,14.3 10.3,15 8.5,15 C4.9,15 2,12.1 2,8.5 M19.7,18.3 L15.2,13.8 C16.3,12.4 17,10.5 17,8.5 C17,3.8 13.2,0 8.5,0 C3.8,0 0,3.8 0,8.5 C0,13.2 3.8,17 8.5,17 C10.5,17 12.3,16.3 13.8,15.2 L18.3,19.7 C18.5,19.9 18.8,20 19,20 C19.2,20 19.5,19.9 19.7,19.7 C20.1,19.3 20.1,18.7 19.7,18.3"/>
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
            <use fill="#000" xlink:href="#search-a"/>
          </g>
        </svg>
    </span>
</div>
`;
