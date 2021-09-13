
/**
* Consolidate your timeout values with something that scales so you don't end up with a bunch of arbitrary timeout values 
* @example
* cy.get("[data-hook='test']", { timeout: timeouts.short })
* cy.task("someTask", {}, { timeout: timeouts.xlong })
*/
export const timeouts = {
    xShort: 800,
    short: 15000,
    medium: 30000,
    long: 60000,
    xlong: 120000,
    xxlong: 240000,
}