import "./CapacityManagementDateInput.css";

export default function CapacityManagementDateInput({ label, type,value,containerStyle={} }) {
  return (
    <div class="cp-user-input-wrp">
      <br />
      <input type={type} class="cp-inputText" required />
      <span class="cp-floating-label">{label}</span>
    </div>
  );
}
