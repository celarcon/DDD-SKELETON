export abstract class EnviromentArranger {
	public abstract arrange(): Promise<void>
	public abstract close(): Promise<void>
}
