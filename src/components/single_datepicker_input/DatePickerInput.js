import "./DatePickerInput.css";

export default function DatePickerInput({ label, type, value, style,style1,disable }) {
  return (
    <div style={style} class="user-input-wrp">
      <br />
      <input disabled={disable} style={style1} type={type} class="inputText" required />
      <span class="floating-label">{label}</span>
    </div>
  );
}
