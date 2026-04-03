export const useSoundState = () => {
  const isSoundOn = useState('isSoundOn', () => true)

  const toggleSound = () => {
    isSoundOn.value = !isSoundOn.value
  }
  return {
    isSoundOn,
    toggleSound
  }
}
