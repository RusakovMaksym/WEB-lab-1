import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue Test', () => {
    let wrapper = null

    it('initializes with correct elements', () => {
        wrapper = mount(AboutView, {
            
        })

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.text()).toContain('Скорочувач посилань')
        expect(wrapper.text()).toContain('Даний сайт дає вам змогу скоротити велике посилання для більш зручного використання')
        expect(wrapper.text()).toContain('Спробувати')
    })
    
})