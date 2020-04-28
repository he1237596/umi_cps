/*
 * @Author: Chris
 * @Date: 2020-04-28 11:54:00
 * @LastEditors: Chris
 * @LastEditTime: 2020-04-28 11:54:01
 * @Descripttion: **
 */
import { shallow } from 'enzyme';
import Foo from './index.js';

describe('<Foo />', () => {
    it('render Foo', () => {
        const wrapper = shallow(<Foo size="large">hello, umi</Foo>);
        expect(wrapper.prop('style').fontSize).toEqual(40);
        expect(wrapper.children().text()).toEqual('hello, umi');
    });
});