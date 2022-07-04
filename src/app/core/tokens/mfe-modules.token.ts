import { InjectionToken } from "@angular/core";

declare let window:any;

const MFE_MODULES = new InjectionToken('MfeModules', {
  providedIn: 'root',
  factory: () => window.__MFE_MODULES__ || undefined
})

export default MFE_MODULES;