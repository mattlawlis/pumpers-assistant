export let assistantId = "asst_eYvQVmwDRejeQ3ySz1ifrMbe"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
