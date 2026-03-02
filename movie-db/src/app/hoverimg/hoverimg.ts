
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hoverimg',
  imports: [],
  template: `
    <div class="hover-3d">
      <!-- content -->
      <figure class="max-w-100 rounded-2xl">
        <img src="{{imgUrl}}" alt="Movie" />
      </figure>
      <!-- 8 empty divs needed for the 3D effect -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
  styles: `
    img {
      width: 100%;
      height: 240px;
    }
`,
})
export class HoverImg {
  @Input() imgUrl: string = "";
}

