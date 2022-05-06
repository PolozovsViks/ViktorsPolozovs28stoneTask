Feature: Login and interact with items
  (Main case) As a user, I should be able to login into the website and add one item to the cart.
  (Additional case) As a user, I should be able to add and also remove several items to/from cart.
  (Additional case) As a user, I should be able to sort the items in list by preference

  Scenario Outline: (Main case) Login, add item to cart, check that the correct item is added
    Given I am on the web application
    When I enter login "<login>"
    And I enter password "<password>"
    And I click on login button
    And I select the desired item "<item>"
    And I add the product to cart
    And I open the cart
    Then I see that correct item "<item>" is in the cart
    Examples:
      | login         | password     | item                |
      | standard_user | secret_sauce | Sauce Labs Backpack |

  Scenario Outline: (Additional case) Login, add 4 items to cart, remove 3 items and check that 1 item is left
    Given I am on the web application
    When I enter login "<login>"
    And I enter password "<password>"
    And I click on login button
    And I add 4 items to cart
    And I open the cart
    And I check that 4 items are in the cart
    And I remove 3 items from cart
    Then I see that 1 item is left in the cart
    Examples:
      | login         | password     |
      | standard_user | secret_sauce |

  Scenario Outline: (Additional case) Login, sort items by preference
    Given I am on the web application
    When I enter login "<login>"
    And I enter password "<password>"
    And I click on login button
    And I click on filter dropdown menu
    And I select the sort "<sort>" by preference
    Then I see that items in list are sorted accordingly
    Examples:
      | login         | password     | sort                |
      | standard_user | secret_sauce | Price (low to high) |

