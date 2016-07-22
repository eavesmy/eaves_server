import React from 'react';
import ReactDom from 'react-dom';

import Contain from './plugin/Contain.js';
import Input from './plugin/Input.js';


ReactDom.render(<div>
    <Contain />
    <Input name='editor' />
</div>, document.getElementById('terminal'));