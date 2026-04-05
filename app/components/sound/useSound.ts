export const useSoundState = () => {
  const isSoundOn = useState('isSoundOn', () => false)

  const toggleSound = () => {
    isSoundOn.value = !isSoundOn.value
  }
  return {
    isSoundOn,
    toggleSound
  }
}
