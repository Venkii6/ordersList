import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home Components',() => {
    const component = shallow(<Home/>);

    describe('Should render without errors', () => {
        it('Should render Button element', () => {
          const elem = component.find('Button');
          expect(elem.length).toBe(2);
        });
        it('Should render model element', () => {
            const elem = component.find('Modal');
            expect(elem.length).toBe(2);
          });
      });

      describe('Should render correct text', () => {
        it('Should render Button1 text', () => {
          const elem = component.find('Button').at(0);
          const text = 'Make Order';
          expect(elem.text()).toEqual(text);
        });

        it('Should render Button2 text', () => {
            const elem = component.find('Button').at(1);
            const text = 'Orders';
            expect(elem.text()).toEqual(text);
          });
      });

});
