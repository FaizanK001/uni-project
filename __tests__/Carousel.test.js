import {shallowMount} from '@vue/test-utils';
import Carousel from '@/components/Carousel';

describe('component', () => {

    const wrapper = shallowMount(Carousel);
    
    test("Check that the specific image exists", () => {
        expect(
            wrapper.findAllComponents('img').at(0).attributes().src
          ).toEqual('cdmp-banner.png')
        })
})
    
