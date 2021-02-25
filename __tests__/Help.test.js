import {mount} from "@vue/test-utils";
import Help from "@/views/Help";

  describe("Testing Graphs Component", ()=>{
    it("renders heading title correctly", ()=>{
  const wrapper = mount(Help, {
    data() {
      return {
        text: 'my-override'
      }
    }
  })
  
  wrapper.find('#heading').text() 
  wrapper.find('#text').text() 
})
  })