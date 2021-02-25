import {shallowMount} from '@vue/test-utils'
import Graphs from '@/views/Graphs.vue'

describe("Testing Graphs Heading", ()=>{
    it("renders heading title correctly", ()=>{
        const wrapper = shallowMount(Graphs);
        expect(wrapper.text()).toMatch("Mutation Data")
    })
});

describe("Testing Graphs Component", ()=>{
    it("renders heading title correctly", ()=>{
        const onClick = jest.fn()
        const wrapper = shallowMount(Graphs, {
            listeners: {
              click: onClick
            }
          })
          wrapper.trigger('click')
          expect(onClick).toHaveBeenCalledTimes(0)
    })
})