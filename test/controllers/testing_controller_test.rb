require 'test_helper'

class TestingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get testing_index_url
    assert_response :success
  end

end
