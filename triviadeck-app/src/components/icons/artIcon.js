import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

//https://react-svgr.com/playground/
//https://material-ui.com/api/svg-icon/
function ArtIcon(props) {
    return (
      <SvgIcon 
        viewBox="0 0 472 472"
        {...props}>
        
      <path d="M464 364h-58.8l45.776-18.312a8 8 0 004.456-10.399v-.001L381.152 149.6l-17.824-44.568a8 8 0 00-10.399-4.456h-.001L288 126.536V124a8 8 0 00-8-8h-72V68a8 8 0 00-8-8H40a8 8 0 00-8 8v296H8a8 8 0 00-8 8v32a8 8 0 008 8h456a8 8 0 008-8v-32a8 8 0 00-8-8zm-94.736-201.032l68.336 170.84-59.424 23.792-68.336-170.864 59.424-23.768zM351.44 118.4l11.88 29.704-59.424 23.776L292 142.168l59.44-23.768zM288 175.2L363.512 364H288V175.2zM208 132h64v32h-64v-32zm0 48h64v136h-64V180zm0 152h64v32h-64v-32zM128 76h64v192h-64V76zm0 208h64v16h-64v-16zm0 32h64v48h-64v-48zM48 76h64v192H48V76zm0 208h64v16H48v-16zm0 32h64v48H48v-48zm408 80H16v-16h440v16z" />
      <path d="M88 84H72a8 8 0 000 16h16a8 8 0 000-16zM80 116a8 8 0 00-8 8v112a8 8 0 0016 0V124a8 8 0 00-8-8zM168 84h-16a8 8 0 000 16h16a8 8 0 000-16zM160 116a8 8 0 00-8 8v112a8 8 0 0016 0V124a8 8 0 00-8-8zM240 196a8 8 0 00-8 8v88a8 8 0 0016 0v-88a8 8 0 00-8-8zM388.576 275.864l-32.68-81.704a8.001 8.001 0 00-14.856 5.944l32.68 81.712a8.002 8.002 0 0014.856-5.952z" />

      </SvgIcon>
    );
  }

  export default ArtIcon;