require 'test_helper'

class FramesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get frames_index_url
    assert_response :success
  end

end
