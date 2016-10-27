'use strict';

import {Component, View, AbstractStubPage} from 'scaffi-ui-core'; // jshint unused: false
import _ from 'lodash';
import template from './overview-installation-install.html';

//start-non-standard
@Component({
	selector: 'overview-installation-install',
})
@View({
	template: template,
	scope: {
	}
})
//end-non-standard

class OverviewInstallationInstall extends AbstractStubPage {
	constructor($scope, $state){
		super($scope);

		
	}

}

export default OverviewInstallationInstall;
