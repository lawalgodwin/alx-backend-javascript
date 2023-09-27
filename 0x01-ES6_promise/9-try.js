export default function guardrail(mathFunction) {
  const result = [];
  try {
    const res = mathFunction();
    result.push(res);
  } catch (error) {
    result.push(`Error: ${error.message}`);
  } finally {
    result.push('uardrail was processed');
  }
  return result;
}
