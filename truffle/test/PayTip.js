const PayTip = artifacts.require('../contracts/PayTip.sol')

  contract("PayTip", accounts => {
    it("Should store the tip amount", async () => {
      const payTip = await PayTip.deployed();
  
      await payTip.setTip(1, { from: accounts[0] });

      await payTip.acceptTip( {from: accounts[1]} )
  
      const storedTip = await payTip.tip.call();
  
      assert.equal(storedTip, 1, "The tip was not stored");
    });
  });

  contract("PayTip", accounts => {
    it("Should store the client correctly", async () => {
      const payTip = await PayTip.deployed();
  
      await payTip.setTip(1, { from: accounts[0] });

      await payTip.acceptTip( {from: accounts[1]} )
  
      const client = await payTip.client.call();
  
      assert.equal(client, accounts[0], "The client is not correct")
    });
  });

  contract("PayTip", accounts => {
    it("Should store the stylist correctly", async () => {
      const payTip = await PayTip.deployed();
  
      await payTip.setTip(1, { from: accounts[0] });

      await payTip.acceptTip( {from: accounts[1]} )
  
      const stylist = await payTip.stylist.call();
  
      assert.equal(stylist, accounts[1], "The stylist is not correct")
    });
  });

//   contract("PayTip", accounts => {
//     it("A tip should increase stylist's account", async () => {
//       const payTip = await PayTip.deployed();

//       const stylistBegBal = accounts[1].balance
  
//       await payTip.setTip(1, { from: accounts[0] });

//       await payTip.acceptTip( {from: accounts[1]} )

//       await payTip.finishPayment( {from: accounts[1]} )

//       const stylistEndBal = accounts[1].balance

//       const change = stylistEndBal - stylistBegBal
  
//       assert.equal(change, 1, accounts[1])
//     });
//   });