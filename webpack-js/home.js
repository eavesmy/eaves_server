import React from 'react';
import ReactDom from 'react-dom';

import HomeBlock from './plugin/HomeBlock.js';

ReactDom.render( <div>
	<HomeBlock />
	<HomeBlock />
	<HomeBlock />
	<HomeBlock />
	<HomeBlock />
	</div>,document.getElementById('nav'));