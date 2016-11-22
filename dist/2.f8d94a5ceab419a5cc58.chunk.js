webpackJsonp([2],{67:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=i(3),s=i(22),c=i(68),a=i(70),f=i(69),u=i(71),l=function(){function CrisisModule(){}return CrisisModule=n([o.NgModule({imports:[s.CommonModule,u.default],declarations:[a.CrisisDetailComponent,c.CrisisListComponent],providers:[f.CrisisService]}),r("design:paramtypes",[])],CrisisModule)}();t.CrisisModule=l},68:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=i(3),s=i(69),c=function(){function CrisisListComponent(e){this.crisisService=e}return CrisisListComponent.prototype.ngOnInit=function(){this.crisises=this.crisisService.getCrises()},CrisisListComponent=n([o.Component({template:"\n    <h3 highlight>Crisis List</h3>\n    <div *ngFor='let crisis of crisises | async'>\n      <a routerLink=\"{{'/crisis/item/' + crisis.id}}\">{{crisis.id}} - {{crisis.name}}</a>\n    </div>\n  "}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.CrisisService&&s.CrisisService)&&e||Object])],CrisisListComponent);var e}();t.CrisisListComponent=c},69:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=i(3),s=function(){function Crisis(e,t){this.id=e,this.name=t}return Crisis}();t.Crisis=s;var c=[new s(1,"Dragon Burning Cities"),new s(2,"Sky Rains Great White Sharks"),new s(3,"Giant Asteroid Heading For Earth"),new s(4,"Procrastinators Meeting Delayed Again")],a=500,f=function(){function CrisisService(){}return CrisisService.prototype.getCrises=function(){return new Promise(function(e){setTimeout(function(){e(c)},a)})},CrisisService.prototype.getCrisis=function(e){return this.getCrises().then(function(t){return t.find(function(t){return t.id===+e})})},CrisisService=n([o.Injectable(),r("design:paramtypes",[])],CrisisService)}();t.CrisisService=f},70:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=i(3),s=i(28),c=function(){function CrisisDetailComponent(e){this.route=e}return CrisisDetailComponent.prototype.ngOnInit=function(){this.id=parseInt(this.route.snapshot.params.id,10)},CrisisDetailComponent=n([o.Component({template:'\n    <h3 highlight>Crisis Detail</h3>\n    <div>Crisis id: {{id}}</div>\n    <br>\n    <a routerLink="../list">Crisis List</a>\n  '}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&e||Object])],CrisisDetailComponent);var e}();t.CrisisDetailComponent=c},71:function(e,t,i){"use strict";var n=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=i(3),s=i(28),c=i(68),a=i(70),f=[{path:"",component:c.CrisisListComponent},{path:"item/:id",component:a.CrisisDetailComponent}],u=function(){function CrisisRoutingModule(){}return CrisisRoutingModule=n([o.NgModule({imports:[s.RouterModule.forChild(f)],exports:[s.RouterModule]}),r("design:paramtypes",[])],CrisisRoutingModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=u}});