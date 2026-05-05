type Props = {
  instructions: string[]
  setInstructions: React.Dispatch<React.SetStateAction<string[]>>
}

export default function InstructionsSection({
  instructions,
  setInstructions
}: Props) {
  function updateStep(index: number, value: string) {
    const updated = [...instructions]
    updated[index] = value
    setInstructions(updated)
  }

  function addStep() {
    setInstructions([...instructions, ""])
  }

  function removeStep(index: number) {
    setInstructions(instructions.filter((_, i) => i !== index))
  }

  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#533F2E]">
          Instructions
        </h2>

        <button
          type="button"
          onClick={addStep}
          className="rounded-full bg-[#8E44AD]/10 px-4 py-2 font-medium text-[#8E44AD]"
        >
          + Add Step
        </button>
      </div>

      <div className="space-y-4">
        {instructions.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8E44AD] font-bold text-white">
              {index + 1}
            </div>

            <input
              value={step}
              onChange={(e) => updateStep(index, e.target.value)}
              placeholder="Describe this step..."
              className="flex-1 rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
            />

            <button
              type="button"
              onClick={() => removeStep(index)}
              className="rounded-[20px] border border-[#D9CBB6] px-4 text-[#8A7A67]"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}