export default function guardrail(mathFunction) {
  const result = [];
  try {
    const res = mathFunction();
    result.push(res);
  } catch (error) {
    result.push(`Error: ${error.message}`);
  } finally {
    result.push('Guardrail was processed');
  }
  return result;
}
