'use strict';

import template from './footer.html!text';
import {View, Component} from 'scaffi-ui-core'; // jshint unused: false
import ScaffiUi from 'scaffi-ui-core';

//start-non-standard
@Component({
    selector: 'footer'
})
@View({
    template: template
})
//end-non-standard
class Footer {
    constructor() {
        this.version = ScaffiUi.config.getVersion();
        this.copyrightDate = new Date();
    }
}
