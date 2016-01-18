import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Component from '../../src/components/Component';

describe('Component', function() {
    let component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(<Component name={'Dr. Nick'} duration={66000} />);
    });

    it('displays the name of the Component', function() {
        expect(TestUtils.findRenderedDOMComponentWithTag(component, 'div').textContent).toEqual('Hi Everybody! Hi Dr. Nick!');
    });
});
