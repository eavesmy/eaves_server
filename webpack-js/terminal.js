import React from 'react';
import ReactDom from 'react-dom';
import ajax from 'reqwest';

import Contain from './plugin/Contain.js';
import Input from './plugin/Input.js';

ReactDom.render(<div>
    <Contain />
    <Input name='aaa' />
</div>, document.getElementById('terminal'));