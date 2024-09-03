export interface ExecutionStatusResponse {
	execution_id: string
	quick_command_slug: string
	conversation_id: string
	progress: Progress
	steps: Step[]
	result: string | null
}

export interface StkTokenResponse {
	refresh_token: string
	access_token: string
}

interface Progress {
	start: string
	end: string | null
	duration: number | null
	execution_percentage: number
	status: 'RUNNING' | 'COMPLETED' | 'FAILED'
}

interface Step {
	step_name: string
	execution_order: number
	type: string
	step_result: StepResult
}

interface StepResult {
	answer: string
	sources: any[]
}
