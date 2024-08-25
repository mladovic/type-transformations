type Command = `!${string}`

// ---- Don't touch below this line ----

export const executeCommand = (command: Command) => {
  // Simulate command execution
  console.log(`Executing ${command}`)
}

// Should succeed:
executeCommand('!attack')
executeCommand('!heal')
executeCommand('!jump')

// Should error:
// @ts-expect-error
executeCommand('attack')
// @ts-expect-error
executeCommand('defend!')
