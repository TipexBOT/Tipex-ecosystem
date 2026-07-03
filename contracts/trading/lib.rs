use anchor_lang::prelude::*;

declare_id!("TIPEX11111111111111111111111111111111111");

#[program]
pub mod trading {
    use super::*;

    pub fn execute_trade(
        _ctx: Context<ExecuteTrade>,
        strategy: String,
    ) -> Result<()> {
        msg!("Executing strategy: {}", strategy);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ExecuteTrade<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
