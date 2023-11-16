let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function shipCanFire()
{
    if (targetHealth > 0 && shipAmmo > 0)
    {
        return true
    }
    else
    {
        return false
    }
}

function isHit()
{
    let chanceHit = Math.random()
    if (chanceHit > .5)
    {
        return true
    }
    else
    {
        return false
    }
}

function reloadShip()
{
    if (shipHealth > 0)
    { 
        shipHealth--
        shipAmmo += 3
    }

}

function isDestroyed()
{
    if (shipHealth > 0)
    {
        return false
    }
    else
    {
        return true
    }
}
