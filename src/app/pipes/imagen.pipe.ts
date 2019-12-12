import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
// Ruta completa de la imágen
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, size: string = 'w500'): string {

    // Pregunto si existe una imágen
    if ( !img ) {
      return '../../assets/no-image-banner.jpg';
    }

    const imgUrl = `${ URL }/${ size }${ img }`;
    console.log('URL', imgUrl );

    return imgUrl;
  }
}
