declare module 'arma3-be-scheduler' {
    interface commands {
        Command: string,
        Amount: number,
        Time: string
    }
    interface config {
        Debug: boolean,
        TimeZone: string,
        Commands: commands[]
    }
    export function Config(Config: config): void
}