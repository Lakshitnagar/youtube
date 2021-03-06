import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import AppLogo from "../../../components/AppLogo/AppLogo";

jest.mock('../../../assets/images/logo.svg', () => 'mockLogoIcon');

describe('AppLogo', function () {
    it('should render and match snapshot', function () {
        const component = <AppLogo />;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
