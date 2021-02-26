import {shallowMount} from '@vue/test-utils'
import Graphs from '@/views/Graphs.vue'

describe("Testing Graphs Component", ()=>{
    it("renders heading title correctly", ()=>{
        const wrapper = shallowMount(Graphs);
        expect(wrapper.text()).toMatch("Mutation Data")
    })
})

