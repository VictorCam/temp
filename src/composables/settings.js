import { useToggle, useStorage } from '@vueuse/core'

export let useSettings = () => {
    let [disableAnimations, toggleAnimations] = useToggle(true);
    return { disableAnimations, toggleAnimations };
}