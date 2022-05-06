package stepDefinitions.Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import stepDefinitions.Hooks;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.Assert.*;


public class TaskSteps {
    private WebDriver driver;

    public TaskSteps() {
        this.driver = Hooks.driver;
        }

    @Given("^I am on the web application$")
    public void iAmOnWebApp() throws Throwable {
        driver.get("https://www.saucedemo.com/");
    }

    @When("^I enter login \"([^\"]*)\"$")
    public void iEnterLogin(String login) throws Throwable {
        driver.findElement(By.id("user-name")).sendKeys(login);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) throws Throwable {
        driver.findElement(By.id("password")).sendKeys(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() throws Throwable {
        driver.findElement(By.id("login-button")).click();
    }

    @And("^I select the desired item \"([^\"]*)\"$")
    public void iSelectFirstItem(String item) throws Throwable {
        driver.findElement(By.xpath("//*[contains(text(), 'Sauce Labs Backpack')]")).click();
    }

    @And("^I add the product to cart$")
    public void iAddItemToCart() throws Throwable {
        driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    }

    @And("^I open the cart$")
    public void iOpenTheCart() throws Throwable {
        driver.findElement(By.xpath("//*[@class='shopping_cart_link']")).click();
    }

    @Then("^I see that correct item \"([^\"]*)\" is in the cart$")
    public void iCheckTheCorrectItem(String item) throws Throwable {
        assertEquals(item, driver.findElement(By.xpath("//*[@class='inventory_item_name']")).getText());
    }

    @And("^I add 4 items to cart$")
    public void iAddFourItemsToCart() throws Throwable {
        driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
        driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
        driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
        driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
    }

    @And("^I check that 4 items are in the cart$")
    public void iCheckFourItemsInCart() throws Throwable {
        assertTrue(driver.findElement(By.xpath("//*[@class='cart_list']/div[3]")).isDisplayed());
        assertTrue(driver.findElement(By.xpath("//*[@class='cart_list']/div[4]")).isDisplayed());
        assertTrue(driver.findElement(By.xpath("//*[@class='cart_list']/div[5]")).isDisplayed());
        assertTrue(driver.findElement(By.xpath("//*[@class='cart_list']/div[6]")).isDisplayed());
    }

    @And("^I remove 3 items from cart$")
    public void iRemoveThreeItemsFromCart() throws Throwable {
        driver.findElement(By.id("remove-sauce-labs-backpack")).click();
        driver.findElement(By.id("remove-sauce-labs-bike-light")).click();
        driver.findElement(By.id("remove-sauce-labs-bolt-t-shirt")).click();
    }

    @Then("^I see that 1 item is left in the cart$")
    public void iSeeOneItemLeftInCart() throws Throwable {
        assertFalse(driver.findElement(By.xpath("//*[@class='cart_list']/div[3]")).isDisplayed());
        assertFalse(driver.findElement(By.xpath("//*[@class='cart_list']/div[4]")).isDisplayed());
        assertFalse(driver.findElement(By.xpath("//*[@class='cart_list']/div[5]")).isDisplayed());
        assertTrue(driver.findElement(By.xpath("//*[@class='cart_list']/div[6]")).isDisplayed());
    }

    @And("^I click on filter dropdown menu$")
    public void iClickOnFilterDropdown() throws Throwable {
        driver.findElement(By.xpath("//*[@class='product_sort_container']")).click();
    }

    @And("^I select the sort \"([^\"]*)\" by preference$")
    public void iSelectTheSortOption(String sort) throws Throwable {
        Select dropdown = new Select(driver.findElement(By.xpath("//*[@class='product_sort_container']")));
        dropdown.selectByVisibleText(sort);
    }

    @Then("^I see that items in list are sorted accordingly$")
    public void iSeeItemsSortedAccordingly() throws Throwable {

        // Set the list back to default
        Select dropdown = new Select(driver.findElement(By.xpath("//*[@class='product_sort_container']")));
        dropdown.selectByVisibleText("Name (A to Z)");

        // Make a list of default prices
        List<WebElement> element = driver.findElements(By.xpath("//*[@class='inventory_item_price']"));
        List<Double> beforeSortingList = new ArrayList<>();

        for(WebElement p : element) {
            beforeSortingList.add(Double.valueOf(p.getText().replace("$", "")));
        }

        // Sort list by price from low to high
        Select dropdownAfter = new Select(driver.findElement(By.xpath("//*[@class='product_sort_container']")));
        dropdownAfter.selectByVisibleText("Price (low to high)");

        List<WebElement> afterSorting = driver.findElements(By.xpath("//*[@class='inventory_item_price']"));
        List<Double> afterSortingList = new ArrayList<>();

        for(WebElement p : afterSorting) {
            afterSortingList.add(Double.valueOf(p.getText().replace("$", "")));
        }

        Collections.sort(beforeSortingList);

        // Verify by assertion
        assertEquals(beforeSortingList, afterSortingList);
    }
}
