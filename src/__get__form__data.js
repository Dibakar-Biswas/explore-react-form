/**
 * 1. e.target.[name of the input field].value
 * 2. use formAction and formData in the action handler. formData.get('name of the input field').
 * 3. controlled component. one per each field. useState on change of the field. useful to dynamically handled error.
 * 4. handled all controlled field in one state object.
 * const [formData, setFormData] = useState({
 *  name: '',
 *  password: '',
 *  phone: ''
 *  })
 * 5. uncontrolled using useRef
 * 
 */