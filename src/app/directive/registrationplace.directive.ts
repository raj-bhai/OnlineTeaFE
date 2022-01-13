import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
declare const google: any;
class GoogelPlaceComponent {
  street_number: string;
  route: string;
  locality: string;
  sublocality: string;
  sublocality_level_1: string;
  sublocality_level_2: string;
  administrative_area_level_1: string;
  administrative_area_level_2: string;
  country: string;
  postal_code: string;
  constructor() {
    this.street_number = '';
    this.route = '';
    this.locality = '';
    this.sublocality = '';
    this.sublocality_level_1 = '';
    this.sublocality_level_2 = '';
    this.administrative_area_level_1 = '';
    this.administrative_area_level_2 = '';
    this.country = '';
    this.postal_code = '';
  }
}
@Directive({
  selector: '[appRegistrationplace]'
})
export class RegistrationplaceDirective implements OnInit {
  @Output() selected: EventEmitter<any>;
  private element: HTMLInputElement;

  constructor(private _ElementRef: ElementRef) {
    this.element = this._ElementRef.nativeElement;
    this.selected = new EventEmitter();
  }
  ngOnInit() {

    const autocomplete = new google.maps.places.Autocomplete(this.element);
    console.log("check",autocomplete);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const long = place.geometry.location.lng();
      const name = place.name;
      const formatted_address = place.formatted_address;
      const googelPlaceComponent = new GoogelPlaceComponent();
      const address_components: any = (place.address_components as any[]).reduce(
        (address, component) => {
          component.types.some((type: string) => {
            Object.keys(googelPlaceComponent).some((key) => {
              if (key === type) {
                address[key] = component.long_name;
                return true;
              }
              return false;
            });
          });
          return address;
        },
        {}
      );
      this.selected.emit({ lat, long, name, formatted_address, address_components });
    });

  }




}
